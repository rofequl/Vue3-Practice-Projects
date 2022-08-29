const {body, validationResult} = require("express-validator");
const User = require("../schema/user");
const {genPassword, validPassword} = require("../helper/passwordUtils");
const {genUsername} = require("../helper/helper");
const {issueJWT} = require("../helper/jwtUtils");

// Get user information
module.exports.profile = function (req, res) {
    return res.json({user: req.user});
};

// User Login
module.exports.login = [
    body("email", "User email required!").notEmpty().custom((value) => {
        return /^.+@(?:[\w-]+\.)+\w+$/.test(value) || /^\d+$/.test(value) ? Promise.resolve() : Promise.reject("Invalid email address")
    }),
    body("password", "User password required!").notEmpty().isLength({min: 6, max: 20})
        .withMessage("password length minimum 6 & maximum 20!"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({errors: errors.mapped()});
        let email = req.body.email;
        let user = await User.findOne({email}).select('+password +salt');
        if (user && user._id) {
            const isValid = validPassword(req.body.password, user.password, user.salt);
            if (isValid) {
                const tokenObject = issueJWT(user);
                res.status(200).json({
                    success: true,
                    token: tokenObject.token,
                    expiresIn: tokenObject.expires,
                });
            } else res.status(401).json({error: "Authentication failed!"});
        } else res.status(401).json({error: "Authentication failed!"});
    },
];

// User registration
module.exports.register = [
    body("first_name", "User first name required!").notEmpty(),
    body("last_name", "User last name required!").notEmpty(),
    body("email", "User email required!").notEmpty().custom((value) => {
        if (/^.+@(?:[\w-]+\.)+\w+$/.test(value)) {
            return User.findOne({email: value}).then((user) => {
                if (user) return Promise.reject("E-mail already in use");
            });
        } else return Promise.reject("Invalid email address");
    }),
    body("password", "User password required!").notEmpty().isLength({
        min: 6,
        max: 20,
    }).withMessage("password length minimum 6 & maximum 20!"),
    body("confirm_password", "User confirm password required!").notEmpty().custom((value, {req}) => {
        return value !== req.body.password ? Promise.reject("Password confirmation does not match password") : true;
    }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({errors: errors.mapped()});
        const saltHash = genPassword(req.body.password);
        const salt = saltHash.salt;
        const password = saltHash.hash;
        const username = genUsername(req);
        // initialize record
        const newUser = new User({
            name: req.body.first_name + " " + req.body.last_name,
            nested: {
                firstName: req.body.first_name,
                lastName: req.body.last_name,
            },
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            password,
            username,
            salt,
        });
        // save record
        await newUser.save(function (err, user) {
            if (err) return res.status(500).json({message: "Error saving record", error: err});
            const tokenObject = issueJWT(user);
            res.status(200).json({
                success: true,
                token: tokenObject.token,
                expiresIn: tokenObject.expires,
            });
        });
    },
];
