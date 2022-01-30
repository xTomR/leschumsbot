import { ICommand } from "wokcommands";
import {QueryType} from "discord-player"
import {player} from "../features/player"

export default {
 category: "Testing",
 description: "Testing",
 slash: true,
 testOnly: true,
 options: [
  {
      name: "song",
      description: "Enter the Song name / URL",
      type: "STRING",
      required: true
  }
],



 callback: async ({client, interaction, options}) => {

const songTitle = await interaction.options.getString("song")

const searchResult = await player.search(songTitle, {
    requestedBy: interaction.user,
    searchEngine: QueryType.YOUTUBE_SEARCH,
})

const queue = player.createQueue("924806922874552320", { metadata: "929893646852030545" })

if (!queue.connection) await queue.connect("924806922874552324")
console.log(songTitle)

searchResult.playlist
    ? queue.addTracks(searchResult.tracks)
    : queue.addTrack(searchResult.tracks[0])

if (!queue.playing) await queue.play()

await interaction.reply({ content: `🎵 **${searchResult.tracks[0]}** is playing 🎵`  })

}



} as ICommand;
