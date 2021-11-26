require("dotenv").config();
const { ShardingManager, DiscordAPIError } = require("discord.js");

//Hago esto para solo ejecutar una vez el código de TopGG
const fs = require('fs');
fs.readFile('start.txt', 'utf8', function(err, data) {
    if (data == "true") {
        fs.writeFile("start.txt", "false", (err) => {
            if (err) console.log(err);
        });
    }
})
const manager = new ShardingManager("./bot.js", {
    token: process.env.token,
    totalShards: "auto",
    shardList: "auto",
    mode: `process`,
    respawn: true,
    timeout: 87398,
});

process.on('unhandledRejection', (reason) => {
    if (reason instanceof DiscordAPIError) return;
    console.error(reason);
});

manager.on('shardCreate', shard => console.log(`Iniciando shard ${shard.id}`));

manager.spawn().catch((err) => console.log(err));