const Command = require("../models/Command");

exports.findAllCommands = async () => {
  return await Command.findAndCountAll();
};

exports.findCommandById = async (id) => {
  return await Command.findByPk(id);
};

exports.findCommandByName = async (name) => {
  return await Command.findOne({ where: { name } });
};

exports.insertCommand = async (command) => {
  return await Command.create(command);
};

exports.updateCommand = async (id, commandDetails) => {
  return await Command.update(commandDetails, { where: { id } });
};

exports.deleteCommand = async (id) => {
  return await Command.destroy({ where: { id } });
};
