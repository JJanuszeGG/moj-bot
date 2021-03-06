const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require('fs');

const prefix = '!';
const token = 'NzE0NzcwMDE1ODMxNzE5OTU3.Xs15Mw.oPeTT4K_PZdkw4gykAJpGgnGMp4';

client.on('ready', () => {
    console.log("[SUCCESS] Uruchomiono bota")
    client.user.setActivity('LuKaS Security')
});

client.commands = new Discord.Collection()

fs.readdir('./cmd/', (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');

    if(jsfile.length <= 0){
        console.log("[BLAD] Nie znaleziono zadnego pliku w folderze cmd");
    }

    jsfile.forEach((f) => {
        let props = require(`./cmd/${f}`);
        client.commands.set(props.help.name, props)
    })
});
client.on('message', async message => {
    if(!message.content.startsWith(prefix)) return;
    let messageAraay = message.content.split(" ");
    let cmd = messageAraay[0];
    let args = messageAraay.slice(1);
    let commandFile = client.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(client, message, args);


});

client.login(token);