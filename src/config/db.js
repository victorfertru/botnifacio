const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

async () => {
  try {
    await dbConnection.authenticate();
  } catch (error) {
    console.log("Unable to connect to the database: " + error);
  }
};

module.exports = dbConnection;
