const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('Nie masz wymaganych permisji!!')

    if(!args[0]) return message.reply('Poprawne użycie to: **.ogl <treść>**')

    const oglEmbed = new Discord.MessageEmbed()
        .setTitle('Ogłoszenie')
        .addField('Treść', ' ' + args.join(''))
        .setColor('0xc41414')
        .setFooter('Wywołał: ' + message.author.username)
    message.delete()
    message.channel.send(oglEmbed)
}

exports.help = {
    name: 'embed'
}