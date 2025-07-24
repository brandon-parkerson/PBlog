const jwt = require("jsonwebtoken");

exports.getPublish = (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "got to publishing page",
        authData,
      });
    }
  });
};
