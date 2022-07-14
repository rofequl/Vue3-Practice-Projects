const {Router} = require("express");
const router = Router();
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const {authMiddleware} = require("../helper/jwtUtils");

// User Authentication Api
router.get("/user/profile", authMiddleware, AuthController.profile);
router.post("/user/signup", AuthController.register);
router.post("/user/login", AuthController.login);

// User Action Api
// router.put('/update/:id', authMiddleware, UserController.updateUser)
// router.get("/user/:username", authMiddleware, UserController.getUser);
router.get("/all-user", authMiddleware, UserController.getAllUsers);
// router.put('/user/:id/follow', authMiddleware, UserController.followUser)
// router.put('/user/:id/unfollow', authMiddleware, UserController.unfollowUser)

module.exports = router;
