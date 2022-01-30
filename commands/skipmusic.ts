import { ICommand } from "wokcommands";
import {player} from "../features/player"

export default {
  category: "Testing",
  description: "Testing",
  slash: true,
  testOnly: true,

  callback: async ({client, interaction, options}) => {

    const queue = player.getQueue(interaction.guildId)

    if (!queue.playing) return interaction.reply({ content: "No music is currently being played in the server!" })

    queue.skip()

    interaction.reply({ content: `Song skipped` })

  }

} as ICommand;