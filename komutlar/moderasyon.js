const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Moderasyon Komutları")
 .setTimestamp()
.setDescription("**!pban** = `Birisine ban atarsınız` \n \n**!pkick** = `Birisine kick atarsınız.` \n \n**!pduyuru** = `Duyuru Yaparsınız` \n \n**!pküfür** = `Küfür engel` \n \n**!preklam** = `Reklam engel.`\n \n**!pslowmode** = `Yavaş Modu Ayarlarsınız.` \n \n**!pforceban** = `Birisine İD Ban Atarsınız.` \n \n**!punban** = `Birisinin Banını Açarsınız.`\n \n **!psa-as** = `Bot Biri Sa Dedimi Cevap Verir.`\n \n **!psunucubilgi** = `Sunucu Bilgilerini Görürsün.`\n \n **!püyedurum** = `Üyelerin Durumlarını Görürsün.`\n \n **!pnuke** = `Yazdığınız Kanalı TerTemiz Eder`")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}