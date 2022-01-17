const Discord = require('discord.js');

const token = "YOUR-TOKEN"

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on('ready', () => {
	console.log(`Logged in as $(client.user.tag)`);
});

const cmds = ['']

function checkForCmd(msg) {
	
}

client.on('messageCreate', (message) => {
	if (message.content === '/test') {
			message.reply('true')
	}
})

client.login(token);