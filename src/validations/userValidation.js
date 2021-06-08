const Joi = require("joi");
const { ROLE } = require("../utils/constants");
exports.insertUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).alphanum().required(),
  //role: Joi.string().valid(...Object.values(ROLE)),
});
