require('./db')
const express = require('express')
const app = express()
const port = 3000

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
}, {timestamps: true})

const Student = mongoose.model('User', user)

app.get('/', (req, res) => {

    Student.find({}, function(err, users) {
        var userMap = {};

        users.forEach(function(user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})