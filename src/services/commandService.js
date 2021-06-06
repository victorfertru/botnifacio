const commandRepository = require("../repositories/commandRepository");
const HttpError = require("../utils/httpError");
const {
  insertCommandSchema,
  updateCommandSchema,
} = require("../validations/commandValidation");

exports.getAllCommands = async () => {
  return await commandRepository.findAllCommands();
};

exports.getCommandById = async (id) => {
  if (!id) throw new HttpError(400, "You must provide ID");

  const command = await commandRepository.findCommandById(id);
  return command.toJSON();
};

exports.createCommand = async (command) => {
  await insertCommandSchema.validateAsync(command);

  await commandRepository.insertCommand(command);
};

exports.editCommand = async ({ id, ...commandDetails }) => {
  if (!id) throw new HttpError(400, "You must provide ID");
  const command = await commandRepository.findCommandById(id);

  if (!command) throw new HttpError(400, "None command exists with id " + id);

  await updateCommandSchema.validateAsync(commandDetails);
  await commandRepository.updateCommand(id, commandDetails);
};

exports.removeCommand = async (id) => {
  if (!id) throw new HttpError(400, "You must provide ID");
  const post = await commandRepository.findCommandById(id);

  if (!post) throw new HttpError(400, "None command exists with id " + id);

  await commandRepository.deleteCommand(id);
};
