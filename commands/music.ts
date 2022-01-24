import { ButtonInteraction, MessageActionRow, MessageButton, Interaction} from "discord.js";
import { ICommand } from "wokcommands";
import {Player} from "discord-player"
import usersSchema from "../models/users-schema";

export default {
 category: "Testing",
 description: "Testing",
 slash: true,
 testOnly: true,



 callback: async ({ interaction: interaction, channel, client, member}) => {
  const player = new Player(client)
  const row = new MessageActionRow()
   .addComponents(
    new MessageButton()
     .setCustomId("play")
     .setEmoji("▶️")
     .setLabel("Play")
     .setStyle("SUCCESS")
   )
   .addComponents(
    new MessageButton()
     .setCustomId("stop")
     .setEmoji("❌")
     .setLabel("Stop")
     .setStyle("DANGER")
   )
   .addComponents(
    new MessageButton()
     .setCustomId("skip")
     .setEmoji("✂️")
     .setLabel("Skip")
     .setStyle("PRIMARY")
   );
   

   await interaction.reply({
    content: "Choose one",
    components: [row],
    ephemeral: true,
   });

   const collector = channel.createMessageComponentCollector({
     max: 1,
     time: 10000
   })
   collector.on('collect', (i: ButtonInteraction) => {
   })
   collector.on('end', async (collection) => {
     if(collection.first()?.customId === 'play') {
       console.log('PLAY')
       await interaction.editReply({
        content: 'You pressed play',
        components: []
      })
     } else if(collection.first()?.customId === 'stop'){
      // if(collection.first().user.id)
      console.log()
      interaction.member
      await interaction.editReply({
       content: 'You pressed stop',
       components: []
     })
     } else if(collection.first()?.customId === 'skip'){
      console.log('PLAY')
      await interaction.editReply({
       content: 'You pressed skip',
       components: []
     })
     }

   })
 },
} as ICommand;
