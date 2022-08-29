const {body, validationResult} = require("express-validator");
const Resize = require('../helper/SaveImage');
const Post = require("../schema/post");
const User = require("../schema/user");
const {decrypt} = require("../helper/encription");
const mongoose = require("mongoose");

// Get all post create by this user
module.exports.getPost = function (req, res) {
    res.send("All Post");
};

// Create a new post
module.exports.createPost = [
    body("image", "Image are can not be empty!").custom((value, {req}) => req.files.some(v => v.fieldname === "image")),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({errors: errors.mapped()});
        try {
            const image = req.files.find(v => v.fieldname === "image")
            const mySelf = req.user
            const imageUpload = new Resize('images/post', 800, 800, image.originalname.substring(image.originalname.lastIndexOf("."), image.originalname.length).toLowerCase());
            const imageName = `images/post/${imageUpload.save(image.buffer)}`;
            const newPost = new Post({
                userId: mySelf._id,
                desc: req.body.desc,
                image: imageName,
            });
            await newPost.save();
            const path = req.protocol + '://' + req.get('host') + "/";
            console.log(newPost._id);
            const currentUserPosts = await Post.aggregate([
                {$match: {_id: newPost._id}},
                {
                    $project: {
                        totalLikes: {$size: "$likes"},
                        desc: 1,
                        image: {$concat: [path, "$image"]},
                        userId: 1,
                        owner: "Myself",
                        likePost: {$in: [mySelf._id, "$likes"]}
                    }
                },
            ]);
            res.status(200).json(currentUserPosts[0]);
        } catch (error) {
            res.status(500).json({message: "Error saving record", error: error.message});
        }
    }
]

// delete a post
module.exports.deletePost = async (req, res) => {
    try {
        const id = decrypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', req.params.postId)
        if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(403).json({
            error: "Action Forbidden",
            message: "Incorrect params request"
        });
        const mySelf = req.user
        const post = await Post.findById(id);
        //Check all data is ok
        if (post == null) return res.status(422).json({error: "Validation error!", message: "This post is not valid"});
        if (post.userId === mySelf._id) {
            await post.deleteOne();
            res.status(200).json("Post deleted.");
        } else return res.status(403).json({
            error: "Action Forbidden",
            message: "You have no access to delete this post"
        });
    } catch (error) {
        res.status(500).json({message: "Error delete post", error: error.message});
    }
}

// Get timeline posts
module.exports.timelinePost = async function (req, res, next) {
    try {
        const userId = req.user._id
        const path = req.protocol + '://' + req.get('host') + "/";
        const currentUserPosts = await Post.aggregate([
            {$match: {userId: new mongoose.Types.ObjectId(userId)}},
            {
                $project: {
                    totalLikes: {$size: "$likes"},
                    desc: 1,
                    image: {$concat: [path, "$image"]},
                    userId: 1,
                    owner: "Myself",
                    likePost: {$in: [userId, "$likes"]}
                }
            },
        ]);
        const followingPosts = await User.aggregate([
            {$match: {_id: new mongoose.Types.ObjectId(userId)}},
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                    pipeline: [
                        {
                            $project: {
                                totalLikes: {$size: "$likes"},
                                desc: 1,
                                image: {$concat: [path, "$image"]},
                                userId: 1,
                                owner: "Others",
                                likePost: {$in: [userId, "$likes"]}
                            }
                        },
                    ],
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "followingPosts.userId",
                    foreignField: "_id",
                    as: "user",
                    pipeline: [
                        {$project: {_id: 1, name: 1, username: 1}}
                    ]
                },
            },
            {$project: {followingPosts: 1, user: 1}}
        ])
        res.status(200).json({
            post: currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            }), user: followingPosts[0].user
        });
    } catch (error) {
        res.status(500).json({message: "Error delete post", error: error.message});
    }
}

// like/dislike a post
module.exports.likePost = async (req, res) => {
    try {
        const id = decrypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', req.params.postId)
        if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(403).json({
            error: "Action Forbidden",
            message: "Incorrect params request"
        });
        const userId = req.user._id
        const post = await Post.findById(id).exec()
        if (!post) return res.status(404).json({error: "Not Found!", message: "No post found in this url"});
        if (post.likes.includes(userId)) {
            await post.updateOne({$pull: {likes: userId}});
            res.status(200).json("Post disliked");
        } else {
            await post.updateOne({$push: {likes: userId}});
            res.status(200).json("Post liked");
        }
    } catch (error) {
        return res.status(500).json({message: "Error like post", error: error.message});
    }
}