const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.urlencoded({ extended: true }));

router.get("/", userController.renderIndex);






module.exports = router;