const commandRepository = require("../repositories/commandRepository");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");
const {
  insertCommandSchema,
  updateCommandSchema,
} = require("../validations/commandValidation");
ERRORS;

exports.getAllCommands = async () => {
  return await commandRepository.findAllCommands();
};

exports.getCommandById = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);

  const command = await commandRepository.findCommandById(id);
  return command.toJSON();
};

exports.getCommandByName = async (command) => {
  if (!command) throw new HttpError(400, ERRORS.NO_CMD);

  const commandFound = await commandRepository.findCommandByName(command);
  return commandFound
    ? commandFound.toJSON()
    : {
        message: "",
      };
};

exports.getCommandByNameWithArg = async (command, arg) => {
  if (!command || !arg) throw new HttpError(400, ERRORS.NO_CMD_ARGS);

  const commandFound = await commandRepository.findCommandByNameWithArg(
    command,
    arg
  );

  return commandFound
    ? commandFound.toJSON()
    : {
        message: "",
      };
};

exports.createCommand = async (commandData) => {
  await insertCommandSchema.validateAsync(commandData);
  const { command, arg } = commandData;
  const cmd = arg
    ? await this.getCommandByNameWithArg(command, arg)
    : await this.getCommandByName(command);
  if (cmd.message) throw new HttpError(400, ERRORS.CMD_EXISTS);
  await commandRepository.insertCommand(commandData);
};

exports.editCommand = async ({ id, ...commandDetails }) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const command = await commandRepository.findCommandById(id);

  if (!command) throw new HttpError(400, ERRORS.CMD_NOT_EXIST + id);

  await updateCommandSchema.validateAsync(commandDetails);
  await commandRepository.updateCommand(id, commandDetails);
};

exports.removeCommand = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const post = await commandRepository.findCommandById(id);

  if (!post) throw new HttpError(400, ERRORS.CMD_NOT_EXIST + id);

  await commandRepository.deleteCommand(id);
};
