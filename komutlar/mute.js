
const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

//unutmayın 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("<:hayir1:630086921426567199> | Yanlış komut!\n<:hayir1:630086921426567199> | Doğru Kullanım:  ``!!sustur <@Kullanıcı> <Süre>`` Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("<:hayir1:630086921426567199> Bu kullanıcıyı muteleyemem. \nSebepleri Şunlar Olabilir;\n  <a:oky:630086921049079849> | Bu kullanıcının rolü benim rolümden yüksek olabilir,\n  <a:oky:630086921049079849> | Kullanıcı ben olabilirim,\n  <a:oky:630086921049079849> | Kullanıcı ile aynı rolde olabiliriz.")
let muterole = message.guild.roles.find(r => r.name === "Mute | Susturulmuş");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute | Susturulmuş",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("<:hayir1:630086921426567199> | Yanlış komut!\n<:hayir1:630086921426567199> | Doğru Kullanım:  ``!!sustur <@Kullanıcı> <Süre>`` Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`**<a:oky:630086921049079849> | Başarılı**\n\n<:evet1:630086921070313493> | <@${tomute.id}> Kullanıcı başarılı şekilde mutelendi. \n<:evet1:630086921070313493> | Mute süresi; ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<a:oky:630086921049079849> | <@${tomute.id}> Kişinin susturulma süresi doldu!\n<:evet1:630086921070313493> | \`Mute | Susturulmuş\` rolü alındı!`);
  }, ms(mutetime));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute"],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanıcı] [Süre]'
};