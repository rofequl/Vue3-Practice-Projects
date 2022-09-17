const fs = require("fs");
const path = require("path");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../schema/user");
const {refreshToken} = require("./loginInfo");
const LoginInfo = require("../schema/login_info");

const PRI_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_priv.pem"), "utf8");
const PUB_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_pub.pem"), "utf8");

function issueJWT(user, refreshKey) {
    const _id = user._id;
    const expiresIn = "5m";
    const payload = {
        sub: _id,
        ref: refreshKey,
    };
    const signedToken = jsonwebtoken.sign(payload, PRI_KEY, {expiresIn, algorithm: "RS256"});
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn,
    };
}

async function authMiddleware(req, res, next) {
    if (!req.get("Authorization")) return res.status(401).json({
        error: "Not authenticated!",
        message: "Authorization token required"
    });
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
        const decodedToken = await jsonwebtoken.decode(tokenParts[1], {complete: true});
        const userLog = await LoginInfo.findOne({refreshKey: decodedToken.payload.ref}).select('_id');
        if (userLog && userLog._id) {
            jsonwebtoken.verify(tokenParts[1], PUB_KEY, {algorithms: ["RS256"], maxAge: "5m"}, function (err, decoded) {
                if (err) {
                    if (err.message === "jwt expired") return res.status(401).json({
                        error: "Token expired",
                        message: "Your token has been expired"
                    })
                    else return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"})
                } else {
                    User.findOne({_id: decoded.sub}, (err, user) => {
                        if (user) {
                            req.user = user;
                            next();
                        } else return res.status(401).json({
                            error: "Not authenticated!",
                            message: "Bearer token invalid"
                        });
                    });
                }
            });
        } else return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
    } else return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
}

async function JWTRefresh(req, res, next) {
    if (!req.get("Authorization")) return res.status(401).json({
        error: "Not authenticated!",
        message: "Authorization token required"
    });
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
        const decodedToken = jsonwebtoken.decode(tokenParts[1], {complete: true});
        if (!decodedToken) return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
        const refresh = await refreshToken(decodedToken);
        if (!refresh) return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
        else {
            const tokenObject = issueJWT(refresh.user, refresh.refreshKey);
            res.status(200).json({success: true, token: tokenObject.token, expiresIn: tokenObject.expires});
        }
    } else return res.status(401).json({error: "Not authenticated!", message: "Bearer token invalid"});
}

module.exports.issueJWT = issueJWT;
module.exports.authMiddleware = authMiddleware;
module.exports.JWTRefresh = JWTRefresh;