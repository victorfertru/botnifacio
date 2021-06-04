require("dotenv").config();
const express = require("express");
const path = require("path");
const loadModels = require("./models/relationship");

const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 8080;

const server = express();
loadModels();

// @Middlewares
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));

// @Routes
server.use("/", indexRouter);

server.listen(PORT, () => console.log(`Everything is fine! in PORT: ${PORT}`));
