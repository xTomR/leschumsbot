import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from '../models/users-schema';

export default {
    category: 'Account',
    description: 'Get your profile information',
    slash: true,
    testOnly: true,

    callback: async ({interaction, member}) => {
        const user = await usersSchema.findOne({'member_id': member.id})
        console.log(member.id)
        const embed = new MessageEmbed()
        .setTitle('Profile')
        .setThumbnail('https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5124.png')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields({
          name: `Summoner`,
          value: user.summonerName,
        })
        .addFields({
          name: `Discord Rank`,
          value: user.rank
        })
        .addFields({
          name: `LP`,
          value: String(user.totalLp)
        })
        return embed
    }

} as ICommand