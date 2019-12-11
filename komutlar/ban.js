const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
 let user = message.mentions.users.first()  
 let neden = args.slice(1).join(' ');
  let hata3 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ', \n :white_small_square:  \n **d!ban <kullanıcı> <neden>** şeklinde olmalı!')
 .setColor('000000')


  let hata4 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ', yetkilileri yasaklayamassın!')
 .setColor('000000')




let hata2 = new Discord.RichEmbed()
 .setTitle('Bir Hata oluştu :(')
 .setDescription(message.member.user.username + ' Sunucudan Birini yasaklamak için,**"ÜYELERİ ENGELLE"** Yetkisine,sahip olman gerekiyor.')
 .setColor('000000')
 


///////////////////////////////////////////////////ing


if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendEmbed(hata2) 
if (message.mentions.users.size < 1) return message.channel.sendEmbed(hata3)    
if (message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(hata4)  
  if(!neden) return message.channel.send('bir neden belirtmelisin!')    
 
 message.delete()
  let embed = new Discord.RichEmbed()
  .setTitle('Doğrulama')
  .setDescription(user + 'adlı kullanıcıyı; **'+neden+'** nedeniyle yasaklamaya eminseniz alttaki emojiye bir kere dokunun.')
  
 message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => sentEmbed.edit("İşlemi iptal ettim! "));
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
message.channel.send('işlem onaylandı!, '+user+' sunucudan yasaklandı.')
    
     message.guild.ban(user, 2); 
        }
    })
}) 
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'taslak', 
  usage: 'ban'
};