import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "Testing",
    description: 'Send an embed',
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        const embed = new MessageEmbed()
        .setDescription("Hello World")
        .setTitle('Title')
        .setColor('GREEN')
        .setAuthor('Tom')
        .setFooter('Footer')
        .addFields([{
            name: 'name',
            value: 'value',
            inline: true,
        },
        {
            name: 'Name Two',
            value: 'Value 2',
            inline: true,
        },
        
    ])
        .addField('name three', 'value three')
        return embed
    },
} as ICommand