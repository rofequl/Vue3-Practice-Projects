const mongoose = require('mongoose')
const {Schema} = mongoose;

const post = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    desc: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    image: String,
    likes: [],
}, {timestamps: true})

module.exports = mongoose.model('Post', post)
