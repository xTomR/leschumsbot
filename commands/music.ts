import { ButtonInteraction, MessageActionRow, MessageButton, Interaction, VoiceChannel, Message} from "discord.js";
import { ICommand } from "wokcommands";
import {Player} from "discord-player"
import usersSchema from "../models/users-schema";
import { Queue } from "galeforce";

export default {
 category: "Testing",
 description: "Testing",
 slash: true,
 testOnly: true,



 callback: async ({ interaction: interaction, channel, client, message}) => {
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

   const messageCollector = channel.createMessageCollector({
    max: 1,
    time: 10000
  })

  messageCollector.on('collect', async (m: Message) => {
    const voiceChannel = await client.channels.fetch('924806922874552324') as VoiceChannel
    const getTrack  = m.content
    const track = await player.search(getTrack,{
      requestedBy: interaction.user
    }).then(x => x.tracks[0])
    const queue = player.createQueue(interaction.guild, {
      metadata: {
        channel: voiceChannel
      }      
    })
    await queue.connect(voiceChannel)
    queue.play(track)
  })

   const collector = channel.createMessageComponentCollector({
     max: 1,
     time: 10000
   })
   collector.on('collect', (i: ButtonInteraction) => {
     console.log('test')
   })
   collector.on('end', async (collection, track) => {
     if(collection.first()?.customId === 'play') {
      const voiceChannel = await client.channels.fetch('924806922874552324') as VoiceChannel
      const queue = player.createQueue(interaction.guild, {
        metadata: {
          channel: voiceChannel
        }      
      })
      await queue.connect(voiceChannel)
       console.log('PLAY')
       await interaction.editReply({
        content: 'You pressed play',
        components: []
      })
     } else if(collection.first()?.customId === 'stop'){
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
