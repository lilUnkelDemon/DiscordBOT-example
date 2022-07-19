const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


bot_secret_token = "YOUR DISCORD TOKEN"   //replace your discord bot tokens

const d = new Date();

client.on('ready', () => {

  // Run Log in your terminal with date & time :D
  console.log(`Logged in as ${client.user.tag}! on ${d}`);

  // Activity of Your Bot e.g. => Developing Demon Bot#2121
  client.user.setActivity(`Developing The ${client.user.tag} !`)
});

client.on('message', message => {


    if (message.content === 'ping') {  
      message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }else if(message.content == 'hi'){
        message.channel.send(`Salam Be Ruye Mahet`);
    }else if(message.content == 'developer'){
        message.channel.send(`Amirabbas Momeni :D`);
    }
  });


client.login(bot_secret_token)
