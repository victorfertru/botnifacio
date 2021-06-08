exports.ROLE = Object.freeze({
  USER: "user",
  ADMIN: "admin",
});

exports.COMMAND_VALID = Object.freeze({
  MAX_CMD_TITLE: 12,
  MAX_ARG_TITLE: 20,
  MAX_MSG_TEXT: 500,
});

exports.DB_MSG = Object.freeze({
  MODELS_LOADED: "All models loaded",
  ALL_RIGHT: "Everything is fine! in PORT ",
});
exports.BOT_MSG = Object.freeze({
  PREFIX: "!",
  HELP: "I would like to show you examples of how to use some HTML tags.\nYou can see which ones by typing `!showcommands`",
});

exports.ERRORS = Object.freeze({
  NONE_ID: "You must provide ID",
  NO_CMD: "You must provide command",
  NO_CMD_ARGS: "You must provide command & args",
  CMD_NOT_EXIST: "None command exists with id ",
  CMD_ARG_NOT_EXIST: "command not exist yet.",
  CONTACT_ADMINS: "Please, contact with admins",
  WRONG_PASSWORD: "Wrong password",
  INVALID_DATA: "Invalid data provided",
  USER_NOT_FOUND: "User not found",
  CMD_EXISTS: "Command already exists",
});

exports.IS_CODE = Object.freeze({
  html: true,
  js: true,
});
