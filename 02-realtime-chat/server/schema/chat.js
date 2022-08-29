const mongoose = require('mongoose')

const chat = new mongoose.Schema({
    members: {
        type: Array,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('Chat', chat)
