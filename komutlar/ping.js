const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send( '**Veriler Hesaplanıyor Lütfen Beklemede Kalın**...');
 var sonuc = await message.channel.send( "Bot Verileri Aldı").then(msg => msg.delete(3000))
     await olcum.edit( ` **İşte Sonuçlar** \n\  **Tepki Verme Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ping) )}\`**ms**\n **Botun Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
/// Altı Silmeyin Sakın Çalışmaz!
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gelişmiş Ping Sistemi CodeHure',
  usage: '{prefix}ping'
};

