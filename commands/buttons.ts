import { ButtonInteraction, MessageActionRow, MessageButton} from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing',
    slash: true,
    testOnly: true,

    callback: async ({interaction: msgInt, channel}) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('username')
            .setEmoji('🗝️')
            .setLabel('Confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('cancel_userName')
            .setLabel('Cancel')
            .setStyle('DANGER')
        )

        await msgInt.reply({
            content: 'Please enter your League of legends username',
            components: [row],
            ephemeral: true,
        })

        const collector = channel.createMessageComponentCollector({
            max: 1,
            time: 15000,
        })
        
        collector.on('collect',(i: ButtonInteraction) => {
            i.reply({
                content: `Your username is`,
                ephemeral: true,
        })
        })

        collector.on('end',  async (collection) => {     
            if (collection.first()?.customId === 'username') {
                // ban the target user
            }

            await msgInt.editReply({
                content: '1',
                components: [],
            })

        })
    }
} as ICommand
