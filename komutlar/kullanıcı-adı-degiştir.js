const Discord = require("discord.js");
const client = new Discord.Client();


exports.run = async (client, message, args) => {
  if (!message.member.roles.has("Komut Kullanmak İçin Rol od"))
    return message.reply(
      "Bu komutu kullanabilmek için Bot Commands rolüne sahip olmalısın."
    );
  let isim = args.slice(1).join(" ");
  let tag = "tag"
  let kullanici = message.mentions.users.first();
  if (!kullanici) return message.reply(`⚠ Lütfen bir kullanıcı giriniz!`);
  if (!isim) return message.reply(`⚠ Lütfen bir kullanıcı adı giriniz!`);
  if (isim.length > 32)
    return message.reply(
      `⚠ Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`
    );
  message.guild.members.get(kullanici.id).setNickname(`${tag} ${isim}`);
  message.react("👌");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["n"],
  permLevel: 3,
  kategori: "Özel"
};

exports.help = {
  name: "isim",
  description: "Belirttiğiniz kullanıcının kullanıcı adını değiştirir.",
  usage: "isim @kullanıcı <kullanıcı adı>"
};