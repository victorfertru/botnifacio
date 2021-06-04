const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const User = dbConnection.define("User", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING(50),
  },
  password: {
    type: DataTypes.STRING(64),
  },
  role: {
    type: DataTypes.STRING(10),
  },
});

module.exports = User;
