const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {


  if (!msg.member.hasPermission ("ADMINISTRATOR")) return msg.reply(`Bu Komutu Kullanmak İçin **Yönetici** İznine Sahip Olmalısın!`);
  
   setInterval(() => {
  msg.guild.roles.find('name', "disco").setColor("RANDOM");
   }, 8000);
msg.channel.send(`Disco Başladı!`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko'],
    permLevel: 3
}

exports.help = {
    name: 'disco',
    description: 'Disco',
    usage: 'disco'
}