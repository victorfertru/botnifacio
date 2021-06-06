const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");
const { ROLE } = require("../utils/constants");

const User = dbConnection.define("User", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: "email",
  },
  password: {
    type: DataTypes.STRING(64),
  },
  role: {
    type: DataTypes.STRING(10),
    type: DataTypes.ENUM([ROLE.ADMIN, ROLE.USER]),
    defaultValue: ROLE.USER,
  },
});

module.exports = User;
