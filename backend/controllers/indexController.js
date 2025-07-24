const jwt = require("jsonwebtoken");

exports.getIndex = (req, res) => {
    res.json({
        message: "Hello!",
    })
}



