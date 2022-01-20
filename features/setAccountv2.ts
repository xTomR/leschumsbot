import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default async (client: Client) => {
  const guild = client.guilds.cache.get("924806922874552320");
  const guildMembers = await guild.members.fetch();
  guildMembers.each(async (member) => {
    const user = async (member) => {   
      const filter = {_id: member.id, 'discord.lolAccountSet': false}
      const update = {"discord.memberId": member.id, "discord.guildId": "924806922874552320", "discord.discordRole": "925833005602320394", }
      return await usersSchema.findOneAndUpdate(filter, update)
    }
    if (member.id != "924806180755341342") {
      user(member)
    }
  });
};
export const config = {
 displayName: "SetAccountV2",
 dbName: "SETACCOUNTV2",
};
