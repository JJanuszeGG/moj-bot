const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    if(!message.member.hasPermission(['BAN_MEMBERS'])) return message.channel.send('Nie masz wymaganych permisji!')

    let banMember = message.mentions.members.first() 
    if(!banMember) return message.channel.send('Podaj użytkownika, do wyrzucenia!')

    let reason = args.slice(1).join(' ')
    if(!reason) reason = 'Nie podaleś powodu wyrzucenia!'

    //kickMember.kick().catch(err => console.log(err))
    message.guild.member(banMember).ban(reason);

    const banEmbed = new Discord.MessageEmbed()
        .setTitle('Wyrzucono')
        .addField(`Wyrzucony`, kickMember.user.username)
        .addField('Administrator', message.author.username)
        .addField('Powód wyrzucenia', reason)
        .setColor('0xc41414')
    message.delete();
    message.channel.send(banEmbed);
    

}
exports.help = {
    name: 'ban'
}