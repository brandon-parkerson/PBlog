const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const jwt = require("jsonwebtoken");

router.get("/",indexController.getIndex);



module.exports = router;