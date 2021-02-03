const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
if(message.author.id !== "761107138688319498") return message.channel.send(":no_entry_sign: Geliştiricim Değilsin Bu Komutu kullanamazsın.!")
const embed = new Discord.MessageEmbed()
.setDescription('**Dikkat Bot Yeniden Başlatılacak Bunu İstiyorsan evet Yazmalısın**')
.setFooter('30 saniye içinde Yazmazsan Bu İşlemi İptal edeceğim')
.setColor('ff0000')
.setTimestamp()
message.channel.send(embed)
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("**Bot yeniden başlatılıyor...**").then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send(':no_entry_sign: Yeniden başlatma işlemi iptal edildi. :no_entry_sign: ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yb', 'rb','reboot',],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};