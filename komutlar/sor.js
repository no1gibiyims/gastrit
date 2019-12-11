const Discord = require('discord.js');

const cevaplar = [                  
                                    'YALAN (ELEKTİRİK ÇARPTI)',
                                    'DOĞRU',
                                    'KISMEN'
                                    
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bana bir soru sormalısın! **Örnek**: d!sorgula <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sor', 
  description: 'Yalan makinesi ile arkadaşlarınızı sorgulayın -sorgula (soru)',
  usage: 'sor'
};