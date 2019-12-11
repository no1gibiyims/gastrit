const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const target = args[0];
    const mainMessage = args.join(" ").slice(19);

    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setFooter("Bot")
    .setDescription("Uyarı")

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) {

        const nopermioEmbedio = new Discord.RichEmbed(embed).setDescription("Denetim Kaydı Görüntüleme Yetkiniz Bulunmadığından Dolayı Komutu Kullanamasınız.!!!");

        message.channel.send(nopermioEmbedio);

    } else {

    const noTarget = new Discord.RichEmbed(embed).setDescription(`Mesajın Gönderileceği **ID** Giriniz`);
    const targetUser = bot.users.get(args[0]);
    const noTargetFound = new Discord.RichEmbed(embed).setDescription("Belirttiğiniz **ID** ye ait Kullanıcı Bulunamadı!");
    const noMessage = new Discord.RichEmbed(embed).setDescription("Gönderilecek Mesajı girmediniz.!");

    if(!target) return message.channel.send(noTarget);
    if(!targetUser) return message.channel.send(noTargetFound);
    const mainEmbed = new Discord.RichEmbed(embed).setDescription(mainMessage).setAuthor("Bot", bot.user.displayAvatarURL).setFooter(`Bot -- ${targetUser.tag}`).setTimestamp();
    if(!mainMessage) return message.channel.send(noMessage);

    message.channel.send(mainEmbed);
    targetUser.send(mainEmbed);
    }


}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyemesaj","üyedm"],
  permLevel: 0
};

exports.help = {
  name: 'üyemesaj',
  description: 'Belirtilen Id deki kişiye özelden göndermek istediğiniz mesajı gönderir',
  usage: 'üyemesaj <ıd> <mesaj>'
};
