import { MessageEmbed, Client, TextBasedChannel, Message } from "discord.js";
import usersSchema from "../models/users-schema";
import {promiseCheck} from "./errorHandler"

export default async (client: Client) => {
 const leaderboard = async () => {
  const usersLolAccountSet = async () => {    
    const getUsersLolAccountSetAndSort = () => {
    const users = usersSchema.find().sort({ "discord.totalLp": -1 })
    .exec()
    return users
  }

  const usersLolAccountSetCheck = await promiseCheck(getUsersLolAccountSetAndSort())
  return usersLolAccountSetCheck.result
  }
  const guild = client.guilds.cache.get("924806922874552320");
  const usersSorted = await usersLolAccountSet()
  if (usersSorted.length === 0) {
   const embed = new MessageEmbed()
    .setTitle("Leaderboard")
    .setColor("GREEN")
    .setAuthor("LESCHUMS")
    .setTimestamp()
    .addFields({ name: "1", value: "the leaderboard is empty" });
   const channel = (await guild.channels.fetch(
    "930640710057734235"
   )) as TextBasedChannel;
   channel.send({ embeds: [embed] });
  } else {
   let i = 1;
   let content = "";
   const embed = new MessageEmbed()
    .setTitle("Leaderboard")
    .setColor("GREEN")
    .setAuthor("LESCHUMS")
    .setTimestamp();
   for (const eachUser of usersSorted) {
    if (eachUser.lol.name != "") {
     content += `${i}. ${eachUser.lol.name} ~ ${eachUser.discord.rank} ~ ${eachUser.discord.totalLp} LP\n`;
     i++;
    }
   }
   embed.setDescription(content);
   const channel = (await guild.channels.fetch(
    "930640710057734235"
   )) as TextBasedChannel;
   const message = (await channel.messages.fetch(
    "931660550335774731"
   )) as Message;
   message.edit({ embeds: [embed] });
  }
 };

  setInterval(leaderboard, 60000);
};

export const config = {
 displayName: "Leaderboard",
 dbName: "LEADERBOARD",
};
