const jwt = require("jsonwebtoken");
const db = require("../db/queries");

exports.postLogin = async (req, res) => {
  const user = await db.getUser(1);
  console.log(user);
  jwt.sign({ user: user }, "secretkey", { expiresIn: "1d" }, (err, token) => {
    res.json({
      token: token,
    });
  });
};
