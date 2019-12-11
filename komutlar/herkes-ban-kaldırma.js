
const Discord = require('discord.js'); 

exports.run = (client, message, args) => {
    const tamam = new Discord.RichEmbed()
        .setColor("GREEN")
 .setTitle(' Sunucuda ki bütün Yasaklanan kullanıcıların yasağını kaldırdı!')
    message.channel.sendEmbed(tamam)

  message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'selam',
  description: 'sunucuda ki bütün yasaklı kullanıcıların yasağını kaldırır.',
  usage: 'selam' //salladım düzeltirsiniz
};
