import { ICommand } from "wokcommands";
import {player} from "../features/player"


export default {
 category: "Testing",
 description: "Testing",
 slash: true,
 testOnly: true,

 callback: async ({client, interaction, options}) => {

  const queue = player.getQueue("924806922874552320")
  console.log(queue)

  if (!queue.playing) return interaction.reply({ content: "No music is currently being played in the server!" })

  queue.stop()

  interaction.reply({ content: `Music stopped !`})
 }
} as ICommand;
