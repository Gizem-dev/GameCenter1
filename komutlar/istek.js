const Discord = require ("discord.js")

exports.run = async (client, message, args) => {


     let mesaj = args.slice(0).join(" ");
    if (mesaj.length < 1) return message.reply("Bir şey yazmadınız.");
    message.delete();



    const kisi = new Discord.MessageEmbed()
    .setTitle("Harika!")
    .setDescription("**İsteğiniz Başarı ile logumuza ulaştırılmıştır!**")
    .setColor("PURPLE")
    message.channel.send(kisi)


    const istek = new Discord.MessageEmbed()
    .setTitle("Yeni Bir İstek Var !")
    .addField("İsteği Gönderen Kişi :", message.author)
    .addField("İstek :", istek)
    client.channels.cache.get("803568401636655135").send(istek)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istek'],
    permLevel: 0
}

exports.help = {
    name: "isteğim",
    description: "Yko",
    usage: "Yko"
}