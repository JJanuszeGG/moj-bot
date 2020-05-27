const Discord = require('discord.js');

const moment = require('moment');

exports.run = async(client, message, args) => {

    let member;
    if (message.mentions.users.first()) {
        member = message.mentions.users.first();
    } else {
        member = message.author;
    }

    var userCreateAccount = moment(member.createdAt).locale('pl').format('LLL') + ' (' + '`' + moment(new Date()).diff(member.createdAt, 'days') + ' dni temu` )';
    

    let role = message.member.roles.cache.array()
    
    const profilEmbed = new Discord.MessageEmbed()
        .setTitle('Profil ' + member)
        .addField('Nazwa', member.username)
        .addField('TAG', '#' + member.discriminator)
        .addField('Role', role)
        .addField('Stworzenie konta', `${userCreateAccount}`)
        .setColor('0xc41414')
    message.channel.send(profilEmbed)
}

exports.help = {
    name: 'profil'
}