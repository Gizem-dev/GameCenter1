const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Kullanıcı Komutları")
 .setTimestamp()
.setDescription("**!pavatar** = `Avatarınıza bakarsınız.`\n \n **!pyetkilerim** = `yetkilileri görürsün`\n \n **!pprofil** = `Profilini görürsün.`\n \n **!psunucuresmi** = `Sunucu resmini gösterir.`\n \n **!pping** = `Botun Pingine Bakarsın.`\n \n **!pid** = `Birisinin İD Sine Bakarsın.`\n \n **!pdavet** = `Beni Sunucuna Ekle.`")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}