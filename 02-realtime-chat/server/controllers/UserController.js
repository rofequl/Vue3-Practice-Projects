const User = require("../schema/user");
const {decrypt} = require("../helper/encription");

// Get all user details except current user
module.exports.getAllUsers = function (req, res) {
    User.find({_id: {$ne: req.user._id}}, 'name username', (err, user) => {
        res.send(user);
    });
};

// Follow a User
module.exports.followUser = async (req, res) => {
    const id = decrypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', req.params.userId)
    //Get 2 User
    const followUser = await User.findById(id);
    const followingUser = req.user;
    //Check all data is ok
    if (followUser == null) return res.status(422).json({
        error: "Validation error!",
        message: "This username is not valid"
    });
    if (followUser.username === followingUser.username) return res.status(403).json({
        error: "Action Forbidden",
        message: "You can't follow yourself"
    });
    if (followingUser.following.includes(followUser._id)) return res.status(403).json({
        error: "Action Forbidden",
        message: "you are already following this id"
    });
    if (followUser.followers.includes(followingUser._id)) return res.status(403).json({
        error: "Action Forbidden",
        message: "you are already followers list in this id"
    });
    //If all ok then save data and return success message
    followUser.updateOne({$push: {followers: followingUser._id}}, () => {
    });
    followingUser.updateOne({$push: {following: followUser._id}}, () => {
    });
    res.status(200).json({
        success: true,
        message: "User followed!",
    });
}

// Unfollow a User
module.exports.unfollowUser = async (req, res) => {
    const id = decrypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', req.params.userId)
    //Get 2 User
    const unFollowUser = await User.findById(id);
    const unFollowingUser = req.user;
    //Check all data is ok
    if (unFollowUser == null) return res.status(422).json({
        error: "Validation error!",
        message: "This username is not valid"
    });
    if (unFollowUser.username === unFollowingUser.username) return res.status(403).json({
        error: "Action Forbidden",
        message: "You can't unfollow yourself"
    });
    if (!unFollowingUser.following.includes(unFollowUser._id)) return res.status(403).json({
        error: "Action Forbidden",
        message: "you are already unfollowing this id"
    });
    if (!unFollowUser.followers.includes(unFollowingUser._id)) return res.status(403).json({
        error: "Action Forbidden",
        message: "you are already remove this id"
    });
    //If all ok then save data and return success message
    unFollowUser.updateOne({$pull: {followers: unFollowingUser._id}}, () => {
    });
    unFollowingUser.updateOne({$pull: {following: unFollowUser._id}}, () => {
    });
    res.status(200).json({
        success: true,
        message: "Unfollowed Successfully!",
    });
}