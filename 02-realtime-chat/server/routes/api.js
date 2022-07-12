const { Router } = require("express");
const router = Router();
const AuthController = require("../controllers/AuthController");
const { authMiddleware } = require("../helper/jwtUtils");

// User Authentication Api
router.get("/user/profile", authMiddleware, AuthController.profile);
router.post("/user/signup", AuthController.register);
router.post("/user/login", AuthController.login);

module.exports = router;
