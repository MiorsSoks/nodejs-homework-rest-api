const Joi = require("joi");

const joiContactSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string(),

  phone: Joi.string(),

  favorite: Joi.boolean(),
});

const joiContactStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string().default("starter"),
  token: Joi.string().default(null),
});

module.exports = { joiContactSchema, joiContactStatusSchema, joiUserSchema };
