const Discord = require('discord.js');
require("dotenv").config()

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
	]
})

let bot = {
	client,
	prefix: "!",
	owners: ["172810582230040577", "636836439115563018"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot,false)

module.exports = bot

client.login(process.env.TOKEN);