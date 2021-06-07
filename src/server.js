require("dotenv").config();
const express = require("express");
const path = require("path");
const loadModels = require("./models/relationship");
const errorHandler = require("./middlewares/errorHandler");
const tokenValidation = require("./middlewares/tokenValidation");

// @discord Bot
const botnifacio = require("./config/botnifacio");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const commandsRouter = require("./routes/commands");
const { DB_MSG } = require("./utils/constants");

const PORT = process.env.PORT || 8080;

const server = express();
loadModels();

// @Middlewares
server.use(express.json());
server.use(tokenValidation);

server.use(express.static(path.join(__dirname, "public")));

// @Routes
server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/commands", commandsRouter);

server.listen(PORT, () => console.log(DB_MSG.ALL_RIGHT + PORT));

server.use(errorHandler);

module.exports = server;
