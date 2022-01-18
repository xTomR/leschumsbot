import discordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands";
import path from "path";
dotenv.config();

// Since discord 13 this is mandatory and it declares the intent of the bot
const client = new discordJS.Client({
 intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_MEMBERS,
 ],
});

// Basic Event handling like connect to databases ETC.
client.on("ready", () => {
 console.log("The bot is ready");

 const wok = new WOKCommands(client, {
  commandDir: path.join(__dirname, "commands"),
  featureDir: path.join(__dirname, "features"),
  typeScript: true,
  testServers: ["924806922874552320"],
  mongoUri: process.env.MONGO_URI,
 });
});

client.on("unhandledRejection", error => {
  console.error("Unhandled promise rejection:", error)
})

client.login(process.env.TOKEN);
