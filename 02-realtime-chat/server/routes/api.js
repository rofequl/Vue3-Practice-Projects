const {Router} = require("express");
const router = Router();
const upload = require('../middleware/UploadMiddleware');
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const {authMiddleware} = require("../helper/jwtUtils");

// User Authentication Api
router.get("/user/profile", authMiddleware, AuthController.profile);
router.post("/user/signup", AuthController.register);
router.post("/user/login", AuthController.login);

// User Action Api
// router.put('/update/:id', authMiddleware, UserController.updateUser)
// router.get("/user/:username", authMiddleware, UserController.getUser);
router.get("/all-user", authMiddleware, UserController.getAllUsers)
router.put('/user/:userId/follow', authMiddleware, UserController.followUser)
router.put('/user/:userId/unfollow', authMiddleware, UserController.unfollowUser)

// Post Api
router.post("/posts", upload.any(), authMiddleware, PostController.createPost);
router.get("/posts/timeline", authMiddleware, PostController.timelinePost);
router.delete("/posts/:postId", authMiddleware, PostController.deletePost);
router.put('/posts/:postId/like', authMiddleware, PostController.likePost)

module.exports = router;