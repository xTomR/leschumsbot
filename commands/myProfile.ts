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
        .setThumbnail('https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5123.png')
        .setColor('RANDOM')
        .setTimestamp()
        .setImage('https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5123.png')
        .addFields({
          name: `test`,
          value: 'test',
          inline: true,
        })
        .setAuthor({ name: '', iconURL: 'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5123.png' })
        .setFooter('test', 'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5123.png' )
        return embed
    }

} as ICommand