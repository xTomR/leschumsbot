import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from '../models/users-schema';

export default {
    category: "Account",
    description: 'Get the leaderboard',
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        const top10users = await usersSchema.find().sort({totalLp: -1})
        console.log(top10users)
        const users = await usersSchema.find({}).exec()
        users.sort()
        const embed = new MessageEmbed()
        .setTitle('Leaderboard')
        .setColor('GREEN')
        .setAuthor('LESCHUMS')
        .setTimestamp()
        .addFields([
        {
            name: 'Summoner Name',
            value: `${top10users[0].summonerName}
            ${top10users[1].summonerName}
            ${top10users[2].summonerName}
            ${top10users[3].summonerName}`,
            inline: true,
        },
        {
            name: 'Rank',
            value: `${top10users[0].rank}
            ${top10users[1].rank}
            ${top10users[2].rank}
            ${top10users[3].rank}`,
            inline: true,
        },
        {
            name: 'LP',
            value: String(`${top10users[0].totalLp}
            ${top10users[1].totalLp}
            ${top10users[2].totalLp}
            ${top10users[3].totalLp}
            `),
            inline: true,
        },
        
    ])
        return embed
    },
} as ICommand