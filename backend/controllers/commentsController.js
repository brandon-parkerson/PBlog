const db = require("../db/queries");

exports.getAllComments = (req, res) => {
  const { postId } = req.params;
  const comments = db.getAllCommentsForPost(postId);
  res.json(comments);
};
