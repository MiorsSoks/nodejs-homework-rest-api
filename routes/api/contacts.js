const express = require("express");

const contactsControls = require("../../controllers");
const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");
const {joiContactSchema, joiContactStatusSchema} = require("../../schemas")

router.get("/", ctrlWrapper(contactsControls.getAll));

router.get("/:contactId", ctrlWrapper(contactsControls.getById));

router.post("/", validation(joiContactSchema), ctrlWrapper(contactsControls.add));

router.delete("/:contactId", ctrlWrapper(contactsControls.removeById));

router.put("/:contactId",validation(joiContactSchema), ctrlWrapper(contactsControls.updateById));

router.patch("/:contactId/favorite", validation(joiContactStatusSchema), ctrlWrapper(contactsControls.updateStatusContact));

module.exports = router;
