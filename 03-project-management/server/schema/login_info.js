const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const loginInfo = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    refreshKey: {type: String, required: true},
    device: Array,
    userAgent: String,
    ip: String,
    userLocation: Array,
    expiredTime: {
        type: Date,
        required: true,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongoose.model('LoginInfo', loginInfo)