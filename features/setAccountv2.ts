import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default async (client: Client) => {
 try {
  const guild = client.guilds.cache.get("924806922874552320");
  const everyMember = await guild.members.fetch();
  everyMember.each(async (member) => {
   if (member.id != "924806180755341342") {
    await usersSchema.findOneAndUpdate(
     {
      _id: member.id, // look for this and if theres none it creates it otherwise it updates it.
     },
     {
      "discord.memberId": member.id,
      "discord.guildId": "924806922874552320",
      "discord.discordRole": "925833005602320394",
     },
     {
      upsert: true,
     }
    );
   }
  });
 } catch (err) {
  console.log(err);
 }
};
export const config = {
 displayName: "SetAccountV2",
 dbName: "SETACCOUNTV2",
};
