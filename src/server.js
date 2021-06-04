require("dotenv").config();
const express = require("express");
const path = require("path");

//const usersRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 8080;

const server = express();

// @Middlewares
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));
// @Routes
//server.use("/users", usersRouter);

server.listen(PORT, () => console.log(`Everything is fine! in PORT: ${PORT}`));
