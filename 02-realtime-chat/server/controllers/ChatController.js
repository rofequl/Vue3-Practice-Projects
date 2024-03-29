const Chat = require("../schema/chat");
const Message = require("../schema/message");
const {body, validationResult} = require("express-validator");
const mongoose = require("mongoose");
const User = require("../schema/user");
const {decrypt} = require("../helper/encription");

// Save a new message
module.exports.addMessage = [
    body("receiverId", "Receiver Id must require!").notEmpty(),
    body("text", "Send message text must e require!").notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({errors: errors.mapped()});
        try {
            let {chatId, receiverId, text} = req.body;
            receiverId = new mongoose.Types.ObjectId(receiverId)
            const senderId = req.user._id
            if (!chatId) {
                const chat = await Chat.findOne({members: {$all: [receiverId, senderId]}});
                if (chat) chatId = chat._id;
                else {
                    const newChat = new Chat({members: [senderId, receiverId]});
                    const result = await newChat.save();
                    chatId = result._id;
                }
            }
            const message = new Message({
                chatId,
                senderId,
                text,
            });
            const submit = await message.save();
            res.status(200).json(submit);
        } catch (error) {
            res.status(500).json({message: "Error saving record", error: error.message});
        }
    }
]

// Get all message by message id
module.exports.getMessages = async (req, res) => {
    try {
        const chatId = decrypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', req.params.chatId)
        //Check all data is ok
        const chat = await Chat.findById(chatId);
        if (chat == null) return res.status(422).json({error: "Validation error!", message: "This chat is not valid"});
        const userId = req.user._id
        const found = chat.members.find(element => JSON.stringify(element) === JSON.stringify(userId));
        if (found) {
            const result = await Message.find({chatId}).select('text senderId updatedAt -_id');
            res.status(200).json(result);
        } else return res.status(403).json({
            error: "Action Forbidden",
            message: "You have no access to delete this post"
        });


    } catch (error) {
        res.status(500).json({message: "Error saving record", error: error.message});
    }
}

// Get all chat list
module.exports.userChats = async (req, res) => {
    try {
        const userId = req.user._id
        const chat = await Chat.find({members: {$in: [userId]}}).select('members');
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get new message suggestion user
module.exports.newMessage = async (req, res) => {
    try {
        const user = req.user
        let suggestion = [];
        let propertyValue = Object.values(user.following);
        suggestion = suggestion.concat(propertyValue);
        if (suggestion.length < 21) {
            let propertyFollowers = Object.values(user.followers);
            suggestion = suggestion.concat(propertyFollowers);
        }
        if (suggestion.length < 21) {
            let propertyUser = await User.find({_id: {$nin: suggestion, $ne: user._id}}).limit(20).distinct('_id');
            suggestion = suggestion.concat(propertyUser);
        }
        const currentUserPosts = await User.aggregate([
            {$match: {_id: {$in: suggestion}}},
            {
                $lookup: {
                    from: "chats",
                    as: "chat",
                    let: {receiverId: "$_id", senderId: new mongoose.Types.ObjectId(user._id)},
                    pipeline: [
                        {$project: {image: ["$$receiverId", "$$senderId"], members: 1}},
                        {$match: {$expr: {$setEquals: ["$image", "$members"]}}}
                    ],
                },
            },
            {$unwind: {path: "$chat", preserveNullAndEmptyArrays: true}},
            {$project: {name: 1, username: 1, chatId: "$chat._id",}},
        ]);
        res.send(currentUserPosts);
    } catch (error) {
        res.status(500).json(error);
    }
};