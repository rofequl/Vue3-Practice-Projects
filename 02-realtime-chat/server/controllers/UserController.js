const User = require("../schema/user");

// Get all user details
module.exports.getAllUsers = function (req, res) {
    return User.find();
};