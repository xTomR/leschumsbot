import { MessageEmbed, Client, TextBasedChannel, Message} from "discord.js"
import usersSchema from "../models/users-schema"

export default async (client: Client,message: Message)  => {

        const foo = async () => {
        const guild = client.guilds.cache.get('924806922874552320')
        const top10users = await usersSchema.find().sort({totalLp: -1})
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
        const channel = await guild.channels.fetch('930640710057734235') as TextBasedChannel
        channel.send({embeds: [embed]})
        const receivedEmbed = channel.messages.cache.get('930666037429542932')
        const newEmbed = new MessageEmbed(receivedEmbed).setTitle('New title');
        const exampleEmbed = new MessageEmbed(receivedEmbed).setTitle('New title');

    }
    foo()
}

export const config = {
    displayName: 'Leaderboard',
    dbName: 'LEADERBOARD'}