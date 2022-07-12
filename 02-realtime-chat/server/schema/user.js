const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    nested: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    dob: {
        type: Date,
        required: [false, "Date of birth required"],
    },
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
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: [],
}, {timestamps: true})

module.exports = mongoose.model('User', user)
