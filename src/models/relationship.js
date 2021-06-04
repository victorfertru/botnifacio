const dbConnection = require("../config/db");
const User = require("./User");

const loadModels = () => {
  dbConnection.sync().then(() => console.log("All models loaded"));
};

module.exports = loadModels;
