const Discord = require('discord.js');
const math = require('mathjs')

const token = "OTMyNTAxMjgxNDE3ODg3ODE1.YeT5fg.KfoZ-R4-X340GX3Jk1j62b3HNWU"

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
	let msg = message.content
	if (msg[0] === '!') {
		if (msg.startsWith('!calc')) {
			let eq = msg.split(' ')[1]
			let answer = math.evaluate(eq).toString()
			message.reply(answer)
		}
	}
})

client.login(token);