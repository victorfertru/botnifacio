require("dotenv").config();
const { BOT_TOKEN } = process.env;
//const commandService = require("../services/commandService");

const Discord = require("discord.js");
// const { codeMessage } = require("../utils/codeMessage");
const discordService = require("../services/discordService");
const { BOT_MSG } = require("../utils/constants");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(
    `I'm on fire! with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );

  client.user
    .setPresence({
      activity: {
        name: "!HELP",
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=i_cVJgIz_Cs",
      },
      status: "online",
    })
    .catch(console.error);
});

client.on("guildCreate", (guild) => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
});
client.on("guildDelete", (guild) => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(BOT_MSG.PREFIX)) return;

  const args = discordService.parserArgs(message);

  const command = discordService.parserCommand(args);

  const messageResponse = await discordService.launchCommand(command, args);

  //only reply if exists message
  messageResponse ? message.reply(messageResponse) : "";

  /*  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
 */
  /*   if (command === "help") {
    message.reply(
      `I would like to show you examples of how to use the different HTML tags. You can see which ones by typing !showcommands`
    );
  }

  if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch((O_o) => {});

    message.channel.send(sayMessage);
  }

  if (command === "showcommands") {
    try {
      const commands = await commandService.getAllCommands();

      let resul = "COMMAND | ARG\n";
      commands.rows.forEach((c) => {
        if (!c.arg) c.arg = "";
        resul += c.command + "   " + c.arg + "\n";
      });
      message.reply("```" + resul + "```");
    } catch (error) {
      console.log(error);
    }
  }

  // si no tiene argumentos, mostrar el comando sólo
  if (!args[0]) {
    try {
      const commandFound = await commandService.getCommandByName(command);

      commandFound.message
        ? message.reply(codeMessage(command, commandFound))
        : "";
    } catch (error) {
      console.log(error);
    }
  }

  // si tiene argumentos
  if (args[0]) {
    try {
      const commandFound = await commandService.getCommandByNameWithArg(
        command,
        args[0]
      );

      commandFound.message
        ? message.reply(codeMessage(command, commandFound))
        : "";
    } catch (error) {
      console.log(error);
    }
  } */
});

client.login(BOT_TOKEN);
