const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.urlencoded({ extended: true }));

router.post("/", userController.createUser);


module.exports = router;
