import { MessageEmbed, Client, TextBasedChannel, Message} from "discord.js"
import usersSchema from "../models/users-schema"

export default async (client: Client,message: Message)  => {

        const foo = async () => {
        const guild = client.guilds.cache.get('924806922874552320')
        const top10users = await usersSchema.find().sort({totalLp: -1})
        const users = await usersSchema.find({}).exec()
        users.sort()
        if(top10users.length === 0){    
            const embed = new MessageEmbed()
            .setTitle('Leaderboard')
            .setColor('GREEN')
            .setAuthor('LESCHUMS')
            .setTimestamp()
            .addFields({name: '1', value: 'the leaderboard is empty'})
            const channel = await guild.channels.fetch('930640710057734235') as TextBasedChannel
            channel.send({embeds: [embed]})
        } else {
            let i = 1
            let content = ""
            const embed = new MessageEmbed()
            .setTitle('Leaderboard')
            .setColor('GREEN')
            .setAuthor('LESCHUMS')
            .setTimestamp()
            for(const eachUser of top10users){            
                content += `${i}. ${eachUser.lol.name} ~ ${eachUser.discord.rank} ~ ${eachUser.discord.totalLp} LP\n`
                i++
            }
            embed.setDescription(content)
            const channel = await guild.channels.fetch('930640710057734235') as TextBasedChannel
            const message = await channel.messages.fetch('931660550335774731') as Message
            message.edit({embeds: [embed]})
            }
    }
    foo()
}

export const config = {
    displayName: 'Leaderboard',
    dbName: 'LEADERBOARD'}