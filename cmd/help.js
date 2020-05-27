const Discord = require('discord.js');

exports.run = async(client, message) => {
    const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Pomoc')
        .addField('Użytkownik', '.pomoc - Aktualnie sie tu znajdujesz  \n .propozycja <tresc> - Wysyła embed z propozycja na #propozycje')
        .addField('Administracja', '.kick <@user> <powod> - Wyrzuca użytkownika \n .vote <tresc> - Tworzy ankiete \n .embed <tresc> - Tworzy ogloszenie')
        .setColor('0xc41414')
    message.channel.send(helpEmbed)
}

exports.help = {
    name: 'pomoc'
}