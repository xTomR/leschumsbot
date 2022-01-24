import {Client} from "discord.js"

export default (client: Client) => {
  const getGuild = () => {  
    const guild = client.guilds.cache.get("924806922874552320");
  return guild}

}