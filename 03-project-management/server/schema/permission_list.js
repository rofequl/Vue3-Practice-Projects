const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const permissionList = new mongoose.Schema({
    permissionName: {
        type: String,
        required: true,
    },
    permissionId: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('PermissionList', permissionList)