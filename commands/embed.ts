import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from '../models/users-schema';

export default {
    category: "Testing",
    description: 'Send an embed',
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        const users = await usersSchema.find({}).exec()
        users.sort()
        let today = new Date().toISOString().slice(0, 10)
        let now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        const embed = new MessageEmbed()
        .setTitle('Leaderboard')
        .setColor('GREEN')
        .setAuthor('LESCHUMS')
        .setFooter(`${today}  ${hours}:${minutes}:${seconds} `)
        .addFields([{
            name: 'Top 10',
            value: users[0].summonerName,
            inline: true,
        },
        {
            name: 'Rank',
            value: users[0].rank,
            inline: true,
        },
        {
            name: 'LP',
            value: String(users[0].totalLp),
            inline: true,
        },
        
    ])
        .addField('name three', 'value three')
        return embed
    },
} as ICommand