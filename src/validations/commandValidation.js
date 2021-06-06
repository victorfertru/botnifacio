const Joi = require("joi");
const { COMMAND_VALID } = require("../utils/constants");

exports.insertCommandSchema = Joi.object({
  command: Joi.string().max(COMMAND_VALID.MAX_CMD_TITLE).required(),
  arg: Joi.string().max(COMMAND_VALID.MAX_ARG_TITLE),
  message: Joi.string().max(COMMAND_VALID.MAX_MSG_TEXT).required(),
});
