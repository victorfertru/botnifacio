const dbConnection = require("../config/db");
const User = require("./User");
const Command = require("./Command");
const { DB_MSG } = require("../utils/constants");

const loadModels = () => {
  dbConnection.sync().then(() => console.log(DB_MSG.MODELS_LOADED));
};

module.exports = loadModels;
