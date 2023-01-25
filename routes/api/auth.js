const express = require("express");

const router = express.Router();
const auth = require("../../controllers");
const { ctrlWrapper, validation } = require("../../middlewares");

router.post("/register", ctrlWrapper(auth.reister))

module.exports = router;    