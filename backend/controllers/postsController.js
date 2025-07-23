const db = require("../db/queries");

exports.getAllPosts = (req, res) => {
  const posts = db.getAllPosts();
  res.json(posts);
};

exports.getPost = (req, res) => {
  const postId = req.params;
  const post = db.getPost(postId);
  res.json(post);
};
