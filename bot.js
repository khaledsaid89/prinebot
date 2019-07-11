const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598830662681624577")
setInterval(function() {
channel.send(`khaled lol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);