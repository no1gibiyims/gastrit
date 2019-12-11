const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply("Yazmam için herhangi bir şey yazmalısın.");
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor(0xd97634)
    .setDescription(`**${mesaj}**`);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["embed-yaz"],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: "embed-yaz",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "embed-yaz [yazdırmak istediğiniz şey]"
};