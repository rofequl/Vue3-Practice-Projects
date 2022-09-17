const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const rolePermission = new mongoose.Schema({
    roleId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    permissionId: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('RolePermission', rolePermission)