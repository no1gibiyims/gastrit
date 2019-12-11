// Bu Kod Code Hure'e Aittir izinsiz Paylaşanlar İçin Atları Göndericez (Dişi Değil) // Developer By FriaStyla
const Discord = require('discord.js');
// Elleme Karışmam Bak
exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yönetici Yetkinin Olması Lazım Be Aga :(') // Code Hure https://discord.gg/W8scsQc
   let tag = args[0]
  
  message.channel.sendMessage("Herkesin Adını Sıfırlamak İçin `codehure` yaz") // Code Hure https://discord.gg/W8scsQc
.then(() => {
  // Code Hure https://discord.gg/W8scsQc
  
message.channel.awaitMessages(a => a.author.id === message.author.id && a.content === "codehure", {
    
    max: 1,
    time: 25000,
    errors: ['time'], // Code Hure https://discord.gg/W8scsQc
  })
    
  .then((collected) => { 

  
  message.channel.send("Herkesin Adını Sıfırladım." ) // Code Hure https://discord.gg/W8scsQc
   
   message.guild.members.forEach(u => { // Developer By FriaStyla
u.setNickname("") // Burası Boş Kalsın Beyler :) // Developer By FriaStyla
})
  })
     .catch(() => {
      message.channel.sendMessage("Sana verdiğim sürede cevap vermedin bende iptal ettim "); // Developer By FriaStyla
    });
  
  })

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hkas","kullanıcı-sıfırla"],
    permLevel: 3
}

exports.help = {
    name: 'kullanıcıadı-sıfırla',
    description: 'CodeHure',
    usage: 'FriaStyla'
}
// Bu Kod Code Hure'e Aittir izinsiz Paylaşanlar İçin Atları Göndericez (Dişi Değil) // Developer By FriaStyla