const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.guild.fetchInvites().then(res => {
        let invs = new Discord.Collection();
        res.forEach(i => {
            if(!message.guild.member(i.inviter.id)) return;
            if(!invs.has(i.inviter.id)) invs.set(i.inviter.id, i.uses);
            else invs.set(i.inviter.id, invs.get(i.inviter.id)+i.uses);
        })
        let desc = "";

        //do something with invs
        //console.log(invs.sort((a, b) => b - a))
        desc += invs.sort((a, b) => b - a).firstKey(10).map((id, index) => "**" + (index+1) + ".** " + (message.guild.member(id) ? message.guild.member(id) : "``Bilinmeyen``") + " - **" + invs.sort((a, b) => b - a).array()[index] + " davet**").join("\n");
        let embed = new Discord.RichEmbed()
        .setAuthor("En Çok Davet Edenler")
        .setTimestamp()
        .setFooter(client.user.username)
        .setDescription(desc);
        message.channel.send(embed);    
    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davetler"],
    permLevel: 0
}

exports.help = {
    name: 'davetler',
    description: 'Sunucudaki davetleri gösterir.',
    usage: 'davetler'
}
