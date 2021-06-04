const Joi = require("joi");

exports.insertUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).alphanum().required(),
});
