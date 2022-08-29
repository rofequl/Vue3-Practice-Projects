const mongoose = require('mongoose')
const {Schema} = mongoose;

const message = new mongoose.Schema({
    chatId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    senderId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Message', message)
