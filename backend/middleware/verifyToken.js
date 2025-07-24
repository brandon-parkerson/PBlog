const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    
  } else {
    res.sendStatus(403);
  }
}

module.exports = verifyToken;