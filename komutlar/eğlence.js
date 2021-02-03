const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Eğlence Komutları")
 .setTimestamp()
.setDescription("**!ptersyazı** = `Bir Yazıyı Bot Ters Yazar`\n \n **!pbanner** = `Bot yazdığınız yazıyı banner olarak atar.`\n \n **!pmcödül** = `Minecraft başarımı edinirsiniz.`\n \n **!pfbi** = `Bot FBi Gif Atar.`\n \n **!ptoken** = `Tokenimi Öğrenmek İstemezmisin?`\n \n **!pdüello** = `Düello Atarsın.`\n \n **!pdeprembilgi** = `En Son Olan Depremleri Gösterir`\n \n **!patasözü** = `Rastgele Bir Atasözü Atar`\n \n **!pgöt**  = `NSFW Kanalına Bir Fotoraf Atar :)`\n \n **!paşk** = `Etiketlediğin Kişiyi Ne Kadar Sevdiğini Gösterir`\n \n **!pçıkma-teklifi-et** = `>Birisine Çıkma Teklif Edersin`\n \n **!pyazıtura** =`Yazı Tura Atarsın`")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}