const mongoose = require('mongoose')
const {Schema} = mongoose;

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    mobile: String,
    dob: {type: Date},
    gender: {
        type: String,
        enum: {values: ["Male", "Female"], message: '{VALUE} is not supported'},
        required: false
    },
    password: {
        select: false,
        type: String,
        required: [true, "Password required"],
        min: [6, 'Password must be at least 6, got {VALUE}'],
        max: [20, 'Password must be maximum 20, got {VALUE}']
    },
    salt: {
        select: false,
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
    roleId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    relationship: String,
    livesIn: String,
    profilePicture: String,
}, {timestamps: true})

module.exports = mongoose.model('User', user)