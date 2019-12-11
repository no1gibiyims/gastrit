const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':bar_chart: İstatistik;')
    .addField(':timer: Gecikme: ', client.ping + 'ms')
    .addField(':gem: Versiyon;', "v.1.1.5")
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.size)
    .addField(':clipboard: Sunucular:', client.guilds.size)
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':notepad_spiral:  Kütüphanesi;', `Discord.js`)
    .addField(":robot: CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField(`Discord.js sürümü:`, Discord.version)
    .addField(':construction_worker:  Yapımcım:', '`⎝╲⎝⧹『 ⁿᵒ-¹No_1ⁿᵒ-¹』⧸⎠╱⎠#0001 `')
    .setFooter('Guard Bot', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'i', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [duyuru]'
};