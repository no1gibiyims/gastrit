const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `SİZ MUHTEŞEMSİNİZ, Kan kardeş olun bence`
    if(anasonuc < 80) {
        var yorum = '<a:tusuemoji9:625322827544788992> Siz Ayrılmaz ikilisiniz. <a:tusuemoji9:625322827544788992>'
    }
    if(anasonuc < 60) {
        var yorum = 'Trip atmaları geçse aslında çok iyisiniz.'
    }
    if(anasonuc < 40) {
        var yorum = 'Arada bi tartışsanızda iyisiniz iyi.'
    }
    if(anasonuc < 20) {
        var yorum = 'Siz Düşmanmısınız ?'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} Ve ${s.tag} Arasındaki Kankalık Sonucu.`)
        .setDescription(`Kankalık Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kankaölçer','kanka','arkadaş'],
    permLevel: 0
}
exports.help = {
    name: 'kankaölçer',
    description: 'İki Kullanıcı Arasındaki kanka bağını Ölçer.',
    usage: 'kankaölçer [@Kullanıcı]'
};