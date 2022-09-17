const moment = require('moment')
const User = require("../schema/user");
const LoginInfo = require("../schema/login_info");
const crypto = require("crypto");
const geoip = require('geoip-lite');


async function storeUserLoginInfo(req, user) {
    let userId, useragent, detectResult, expiredTime, geo, lastActive;
    userId = user._id;
    //User Ip and Location
    const ip = "207.97.227.239";
    geo = geoip.lookup(ip);
    const userLocation = {
        country: geo.country,
        timezone: geo.timezone,
        city: geo.city,
    };
    //User Device and useragent
    useragent = req.useragent;
    detectResult = req.device;
    const device = {
        device: detectResult.device.type,
        os: detectResult.os.name,
        browser: detectResult.client.name,
    };
    const refreshKey = crypto.randomBytes(32).toString('hex');
    const userLog = await LoginInfo.findOne({userId, ip, userAgent: useragent}).select('_id');
    expiredTime = moment().add(1, 'days').format()
    if (userLog && userLog._id) {
        lastActive = moment().format()
        await LoginInfo.findByIdAndUpdate(userLog._id, {refreshKey, expiredTime, lastActive});
    } else {
        const newLog = new LoginInfo({
            userId,
            refreshKey,
            device,
            userAgent: useragent,
            ip,
            userLocation,
            expiredTime
        });
        await newLog.save();
    }
    return refreshKey;
}

async function refreshToken(decodedToken) {
    const refreshKey = crypto.randomBytes(32).toString('hex');
    const userLog = await LoginInfo.findOne({refreshKey: decodedToken.payload.ref}).select('_id, expiredTime');
    const user = await User.findOne({_id: decodedToken.payload.sub});
    if (user && userLog._id) {
        let lastActive = moment().format()
        if (moment().isBefore(userLog.expiredTime)) {
            await LoginInfo.findByIdAndUpdate(userLog._id, {refreshKey, lastActive});
            return {user, refreshKey}
        } else return null;
    } else return null;

}

module.exports.storeUserLoginInfo = storeUserLoginInfo;
module.exports.refreshToken = refreshToken;