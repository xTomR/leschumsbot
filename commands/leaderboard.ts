import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from "../models/users-schema";

export default {
 category: "Account",
 description: "Get the leaderboard",
 slash: true,
 testOnly: true,

 callback: async ({ message, text }) => {
  const top10users = await usersSchema.find().sort({ 'discord.totalLp': -1 });
  console.log(top10users[0].lol.name);
  const users = await usersSchema.find({}).exec();
  users.sort();
  const embed = new MessageEmbed()
   .setTitle("Leaderboard")
   .setColor("GREEN")
   .setAuthor("LESCHUMS")
   .setTimestamp()
   .addFields([
    {
     name: "Summoner Name",
     value: `${top10users[0].lol.name}
            ${top10users[1].lol.name} //FIXME:
            ${top10users[2].lol.name}
            ${top10users[3].lol.name}`,
     inline: true,
    },
    {                       
     name: "Rank",
     value: `${top10users[0].discord.rank}
            ${top10users[1].discord.rank} //FIXME:
            ${top10users[2].discord.rank}
            ${top10users[3].discord.rank}`,
     inline: true,
    },
    {
     name: "LP",
     value: String(`${top10users[0].discord.totalLp}
            ${top10users[1].discord.totalLp}
            ${top10users[2].discord.totalLp} //FIXME:
            ${top10users[3].discord.totalLp}
            `),
     inline: true,
    },
   ]);
  return embed;
 },
} as ICommand;
