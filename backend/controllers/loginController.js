const jwt = require("jsonwebtoken");
const db = require("../db/queries");

exports.postLogin = (req, res) => {
  const user = db.getUser(1);

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token: token,
    });
  });
};
