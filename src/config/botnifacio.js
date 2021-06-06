require("dotenv").config();
const { BOT_TOKEN } = process.env;
const commandService = require("../services/commandService");

const Discord = require("discord.js");

const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
  console.log(
    `I'm on fire! with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`!help`);
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
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "help") {
    message.reply(
      `I would like to show you examples of how to use the different HTML tags. You can see which ones by typing !showcommands`
    );
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

  if (command === "html") {
    if (!args[0]) {
      // si no hay argumentos, mostrar el comando sólo
      try {
        const commandFound = await commandService.getCommandByName(command);
        message.reply("```" + commandFound.message + "```");
      } catch (error) {
        console.log(error);
      }
    } else if (args[0]) {
      try {
        const commandFound = await commandService.getCommandByNameWithArg(
          command,
          args[0]
        );
        message.reply("```" + commandFound.message + "```");
      } catch (error) {
        console.log(error);
      }
    }
  }
});

client.login(BOT_TOKEN);
