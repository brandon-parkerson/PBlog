const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");
const commentsController = require("../controllers/commentsController");

router.get("/", postsController.getAllPosts);
router.get("/:postId", postsController.getPost);
router.get("/:postId/comments", commentsController.getAllComments);

module.exports = router;
