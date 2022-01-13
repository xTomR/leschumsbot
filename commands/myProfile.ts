import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from "../models/users-schema";
import { rankedIcon, getProfileIcon } from "../Images/images";

export default {
 category: "Account",
 description: "Get your profile information",
 slash: true,
 testOnly: true,

 callback: async ({ interaction, member }) => {
  const user = await usersSchema.findOne({ 'discord.memberId': member.id });
  const profileIcon = await getProfileIcon(member.id);
  console.log(String(user.lol.summonerLevel))
  const embed = new MessageEmbed()
   .setThumbnail(profileIcon)
   .setColor("RANDOM")
   .setTimestamp()
   .setImage("")
   .addFields({
    name: `Level`,
    value: String(user.lol.summonerLevel
        ),
    inline: true,
   })
   .setAuthor({ name: String(user.lol.name), iconURL: rankedIcon.diamond })
   .setFooter("test", rankedIcon.bronze);
  return embed;
 },
} as ICommand;
