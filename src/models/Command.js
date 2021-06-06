const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");
const { COMMAND_VALID } = require("../utils/constants");

const Command = dbConnection.define("Command", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  command: {
    type: DataTypes.STRING(COMMAND_VALID.MAX_CMD_TITLE),
    allowNull: false,
  },
  arg: {
    type: DataTypes.STRING(COMMAND_VALID.MAX_ARG_TITLE),
  },
  message: {
    type: DataTypes.STRING(COMMAND_VALID.MAX_MSG_TEXT),
    allowNull: false,
  },
});

module.exports = Command;
