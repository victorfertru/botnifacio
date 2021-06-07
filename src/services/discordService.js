const { BOT_MSG, IS_CODE } = require("../utils/constants");
const { codeMessage } = require("../utils/codeMessage");
const commandService = require("../services/commandService");

const parserBody = (str) => {
  return str.content.slice(BOT_MSG.PREFIX.length);
};

const parserArgs = (str) => {
  return parserBody(str).split(" ");
};
const parserCommand = (str) => {
  return str.shift().toLowerCase();
};

const showHelpMsg = () => {
  return BOT_MSG.HELP;
};

const showListOfCommands = async () => {
  try {
    const commands = await commandService.getAllCommands();

    let resul = "COMMAND | ARG\n";
    commands.rows.forEach((c) => {
      if (!c.arg) c.arg = "";
      resul += c.command + "   " + c.arg + "\n";
    });
    return "```" + resul + "```";
  } catch (error) {
    console.log(error);
  }
};

const showKnownCommand = async (cmd, arg) => {
  try {
    const command = arg[0]
      ? await commandService.getCommandByNameWithArg(cmd, arg[0])
      : await commandService.getCommandByName(cmd);
    let resul;

    command.message
      ? (resul = codeMessage(IS_CODE[cmd], command))
      : (resul = "");

    return resul;
  } catch (error) {
    console.log(error);
  }
};
const showHTMLCommand = async (cmd, arg) => {
  return await showKnownCommand(cmd, arg);
};

const launchCommand = async (cmd, arg) => {
  switch (cmd) {
    case "showcommands":
      return await showListOfCommands();
    case "help":
      return showHelpMsg();
    case "html":
      return showHTMLCommand(cmd, arg);
    default:
      return await showKnownCommand(cmd, arg);
  }
};

module.exports = {
  parserCommand,
  parserArgs,
  launchCommand,
};
