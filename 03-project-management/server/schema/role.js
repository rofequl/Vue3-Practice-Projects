const mongoose = require('mongoose')

const role = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('Role', role)