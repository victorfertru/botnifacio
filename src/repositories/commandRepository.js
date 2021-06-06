const Command = require("../models/Command");
const { Op } = require("sequelize");

exports.findAllCommands = async () => {
  return await Command.findAndCountAll({
    order: [
      ["command", "ASC"],
      ["arg", "ASC"],
    ],
  });
};

exports.findCommandById = async (id) => {
  return await Command.findByPk(id);
};

exports.findCommandByName = async (command) => {
  return await Command.findOne({ where: { command, arg: { [Op.is]: null } } });
};

exports.findCommandByNameWithArg = async (command, arg) => {
  return await Command.findOne({ where: { command, arg } });
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
