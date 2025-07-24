const db = require("../db/queries");
const jwt = require("jsonwebtoken");

exports.getAllPosts = (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const posts = db.getAllPosts();
      res.json({
        message: 'got all posts',
        posts,
        authData,
      });
    }
  });
};

exports.getPost = (req, res) => {
  const postId = req.params;
  const post = db.getPost(postId);
  res.json(post);
};
