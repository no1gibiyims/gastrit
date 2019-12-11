const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:tusuemoji4:625322563299704842> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle! Ve yazdıktan sonra biraz bekle.  hepsinden rol almak sürüyor biraz :)')

  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alınıyor <a:tusuemoji2:625321013176958986> Biraz bekle!`)
        .setColor(rol.hexColor)
   
   
   message.guild.members.forEach(u => {
u.removeRole(rol)
   })
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al','herkestenrolal'],
    permLevel: 3
}

exports.help = {
    name: 'herkestenrolal',
    description: 'Herkesten rol alır.',
    usage: 'herkestenrolal @rol / rol-ismi'
}