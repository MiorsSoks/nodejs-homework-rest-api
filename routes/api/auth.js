const express = require("express");

const router = express.Router();
const {auth} = require("../../controllers");
const { ctrlWrapper, validation } = require("../../middlewares");
const {joiUserSchema} = require("../../schemas")

router.post("/register", validation(joiUserSchema), ctrlWrapper(auth.register))

module.exports = router;    