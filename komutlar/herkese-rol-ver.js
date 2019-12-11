const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  var bot = "648555151170338877"
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:tusuemoji4:625322563299704842> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkese rol verebilmem için bir rol etiketlemelisin.Ve yazdıktan sonra biraz bekle.  hepsinden rol almak sürüyor biraz :)')
  
  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkese ${rol} adlı rol veriliyor. <a:tusuemoji2:625321013176958986> Biraz bekle!`)
        .setColor(rol.hexColor)
   
   message.guild.members.forEach(u => {
u.addRole(rol)
})
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['herkeserolver'],
    permLevel: 0
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}