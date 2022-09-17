const {Router} = require("express");
const router = Router();
const AuthController = require("../controllers/AuthController");
const {authMiddleware, JWTRefresh} = require("../helper/jwtUtils");
const {detectServer} = require("../middleware/DetectServer");

// User Authentication Api
router.get("/user/profile", authMiddleware, AuthController.profile);
router.post("/user/signup", AuthController.register);
router.post("/user/login", detectServer, AuthController.login);
router.post("/user/token/refresh", JWTRefresh);

module.exports = router;