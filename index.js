"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;
const BOTCHANNEL = process.env.BOTCHANNEL;
const BOTCHANNEL2 = process.env.BOTCHANNEL2;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});

const MESSAGE_RESPONSE = ["Callate perra ༼ つ ◕_◕ ༽つ", " Huevos🥚🥚", "Que tal PUTA 💅"];
const MESSAGE_RESPONSE2 = ["Que rico!!!", "Comes"];


//Recibir mensaje
function gotMessage(message) {
    console.log("New Message!", message);

    
    /*if (message.content.match(/([A-Z])iko/)) {
        message.reply("!play quiero semen");
    }*/

    if ( message.content.match(/([a-z])ola+/)) {
        let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE.length);
        message.channel.send(MESSAGE_RESPONSE[randomIndex]);
    }


    if ( message.content.match(/([a-z])uevos+/)) {
        let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE2.length);
        message.channel.send(MESSAGE_RESPONSE2[randomIndex]);
    }

    

    /*if (message.content === "sherk") {
        const img = new Discord.MessageAttachment("data:image/jpeg;base64,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");
        message.BOTCHANNEL.send(img);
    }*/

}

client.on("messageCreate", gotMessage);
//Mensaje hola

// Login to Discord with your client's token
client.login(TOKEN);
