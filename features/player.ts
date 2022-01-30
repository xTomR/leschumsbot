import {Player} from "discord-player"
import {client} from "../index"

export const player = new Player(client, {
  ytdlOptions: {
      quality: "highestaudio",
      highWaterMark: 1 << 25,
  },
});