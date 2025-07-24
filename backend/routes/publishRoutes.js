const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const publishController = require("../controllers/publishController");

router.get("/", publishController.getPublish)


module.exports = router;
