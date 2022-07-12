const fs = require("fs");
const path = require("path");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../schema/user");

const PRI_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_priv.pem"), "utf8");
const PUB_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_pub.pem"), "utf8");

function issueJWT(user) {
    const _id = user._id;
    const expiresIn = "1d";
    const payload = {
        sub: _id,
        iat: Date.now(),
    };
    const signedToken = jsonwebtoken.sign(payload, PRI_KEY, {expiresIn, algorithm: "RS256"});
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn,
    };
}

function authMiddleware(req, res, next) {
    if (!req.get("Authorization")) return res.status(401).json({
        error: "Not authenticated!",
        message: "Authorization token required"
    });
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
        const jwt = jsonwebtoken.verify(tokenParts[1], PUB_KEY, {algorithms: ["RS256"], maxAge: "1d"});
        User.findOne({_id: jwt.sub}, (err, user) => {
            if (user) {
                req.user = user;
                next();
            } else return res.status(401).json({error: "Not authenticated!"});
        });
    } else
        return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
}

module.exports.issueJWT = issueJWT;
module.exports.authMiddleware = authMiddleware;
