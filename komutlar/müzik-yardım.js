
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Tüm Müzik Komutları Listesi Buyrun.")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**  Müzik Komutları **", `  Müzik Açmak İçin +p <müzikadı>\n  Müzik Sırasınıı Görmek  İçin +sıra \n  Tüm Müzikleri Kapatmak İçin +kapat \n  Çalan Müziği Görmek İçin +ç \n Çalan Müziği Durdurmak İçin +durdur \n Durdurulan Müzigi Devam Ettirmek İçin +devam \n Ses Ayarı Yapmak İçin İçin +ses   `)
  
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};