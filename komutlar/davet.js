const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle")
  .setDescription("[Davet Et](https://discord.com/oauth2/authorize?client_id=803941081544261672&scope=bot&permissions=8) \n [Destek Sunucusu](https://discord.gg/mREyMsbjsc)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};