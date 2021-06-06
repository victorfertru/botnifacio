const commandRepository = require("../repositories/commandRepository");
const HttpError = require("../utils/httpError");
const { insertCommandSchema } = require("../validations/commandValidation");

exports.getAllCommands = async () => {
  return await commandRepository.findAllCommands();
};

exports.getCommandById = async (id) => {
  if (!id) {
    throw new HttpError(400, "You must provide ID");
  }
  const command = await commandRepository.findCommandById(id);
  return command.toJSON();
};

exports.createCommand = async (command) => {
  await insertCommandSchema.validateAsync(command);

  await commandRepository.insertCommand(command);
};
