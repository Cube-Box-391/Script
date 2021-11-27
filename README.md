<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="🤖 Script" src="https://cdn.discordapp.com/attachments/716260645271765024/891024190243745812/Script.png">  

# Script

[![⭐ GitHub](https://img.shields.io/github/stars/CubeBox391/Script.svg?style=social&label=Stars&style=flat)](https://github.com/LyricalString/Node/stargazers)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LyricalString_probando&metric=ncloc)](https://sonarcloud.io/dashboard?id=LyricalString_probando)
[![](https://img.shields.io/badge/discord.js-v13.0.0--dev-blue.svg?logo=npm)](https://github.com/discordjs)
[![DevServer](https://discordapp.com/api/guilds/744112347664089178/widget.png?style=shield)](https://discord.gg/kuMYA7f)
[![](https://img.shields.io/github/languages/top/Cube-Box-391/Script)]()

Script is a multifunction, multilanguage bot, programed on [Discord.js](https://discord.js.org) and [Mongoose](https://mongoosejs.com/docs/api.html) by [Cube-Box-391](https://github.com/Cube-Box-391).  
Add a ⭐ to the proyect to promote it!

## Requirements

1. Token of Discord Developers **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Java (to run Lavalink for the music module)
3. Node.js v16.0.0 or a more recent one.


## 🚀 Instalation Guide

```sh
git clone https://github.com/Cube-Box-391/Script
cd Node
npm install
```

⚠️ After the instalation before running `node index.js` and `java -jar Lavalink2.jar`, you have to create a `.env` file and add the credentials how it's shown bellow. 

## ⚙️ Configuration

Following the format bellow, you shoud create a `.env` file to add the credentials.

⚠️ **Note: Never publish or show your token or API keys publicly** 

```json
mode = "[development/production]"
token = "bot token"
lang = "[es_ES/en_US]"
prefix = "bot prefix"
botID = "bot id"
MONGO_URL =  "url of Mongo"
EMBED_COLOR = "predifine color for embeds"
errorWebhookID = "whebhook ID where error messages will be sent"
errorWebhookToken = "whebhook token where errors will be sent"
errorChannel = "channel ID where errors will be sent"
clientIDSpotify = "Spotify client ID"
clientSecretSpotify = "Spotify client token"
guildAddWebhookID = "whebhook ID where new server notifications will be sent"
guildAddWebhookToken = "whebhook token where new server notifications will be sent"
OsuSecret = "OSU API key"
trnAPIKey = "TRN API key (fnprofile command)"
```
🚨 **You have to fill out at least untill MONGO_URL to start the bot, the rest will kist give you errors when trying to run the command that uses those credentials** 🚨



## 🛠️ Characteristics

### Full Bot

List of functions:
*   ✉️ Global prefix or prefixx per server, apart from the ping of the bot.
*   en Multilanguage (Eanglish and Spanish)
*   ⚙️ Configuration on Mongo per server (prefix, voice channels, etc...)
*   😀 Unique commands on embeds



### Command categories

Script has over 100 commands spread on **7 categorías**:

*   👩‍💼 **Administration**
*   🛡 **Moderation**
*   🎵 **Music**
*   😂 **Fun**
*   🚩 **Info and utilities**
*   🫂 **Interaction**
*   💻 **Development** (Commands that are currently in development)

## 📎 Links

*   [Discord](https://discord.gg/kuMYA7f)
*   [Github](https://github.com/Cube-Box-391)

## 🤝 Contributions

Before **reporting and error**, please make sure that it hasn't been reported/address before on the [Issues](https://github.com/Cube-Box-391/Script/issues) page.   
If you have any question, feel free to ask on the [Discord server](https://discord.gg/kuMYA7f) instead of creating an [Issue](https://github.com/Cube-Box-391/Script/issues).
If you want to contribute, feel free to create a pull request.

## 📝 credits

* [@CubeBox391](https://github.com/Cube-Box-391) Main author of the project.
* [@lyricalstring](https://github.com/LyricalString) Made the base of the code.

## 📜 License

Script is license under a GPL `3.0` License. Revise the `LICENSE` file for more info about the license. If you plan to use these code for the base of your bot, will be thankfull if you added us on the credits.
