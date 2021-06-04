const dbConnection = require("../config/db");
const User = require("./User");

const loadModels = () => {
  dbConnection
    .sync({ alter: true })
    .then(() => console.log("All models loaded"));
};

module.exports = loadModels;
