const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply("Yazmam için herhangi bir şey yazmalısın.");
  message.delete();

  return message.channel.sendEmbed(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: "yaz",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz [yazdırmak istediğiniz şey]"
};