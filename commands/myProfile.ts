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
  const user = await usersSchema.findOne({ member_id: member.id });
  const profileIcon = await getProfileIcon(member.id);
  const embed = new MessageEmbed()
   .setThumbnail(profileIcon)
   .setColor("RANDOM")
   .setTimestamp()
   .setImage("")
   .addFields({
    name: `test`,
    value: "test",
    inline: true,
   })
   .setAuthor({ name: String(user.summonerName), iconURL: rankedIcon.diamond })
   .setFooter("test", rankedIcon.bronze);
  return embed;
 },
} as ICommand;
