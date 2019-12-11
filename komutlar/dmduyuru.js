const Discord = require('discord.js');


exports.run = (client, message, args) => {
var embed2 = new Discord.RichEmbed()   
      .setTitle('Merhaba,' + message.member.user.username)
      .setDescription('sadece sahibim bu komutu  kullanabilir! ')
      .setColor('RED') 
  

     
  let mesaj = args.slice(0).join(' ');
 if (!message.author.id===625332619634147329)if (!message.author.id===631192873123184646) if (!message.author.id===644185520599072778)if (!message.author.id===531564682947985428)return message.channel.send(embed2)
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      client.users.forEach(u => {
u.send(mesaj)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 0
};

exports.help = {
  name: 'herkesedm',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkesedm [duyurmak istediğiniz şey]'
};
