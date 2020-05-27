const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    let sChannel = message.guild.channels.cache.find(x => x.name === 'chat-owner')

    const propEmbed = new Discord.MessageEmbed()
        .setTitle('Propozycja ' + message.author.username)
        .addField('Treść: ', "" + args.join(' '))
        .setColor('0xc41414')
    let msg = await sChannel.send(propEmbed)
    await msg.react('✔️');
    await msg.react('❌');

}

exports.help = {
    name: 'propozycja'
}