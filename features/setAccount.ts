import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default (client: Client) => {
 client.on("guildMemberAdd", async (member) => {
  member.roles.add("925833005602320394");

  await usersSchema.findOneAndUpdate(
   {
    _id: member.id // look for this and if theres none it creates it otherwise it updates it.
   },
   {
    discord:
    {
        memberId: member.id,
        guildId: "924806922874552320",
        discordRole: "925833005602320394",
        rank: "Iron IV",
        totalLp: 0,
    },
    lol:
    {
        id: null,
        accountId: null,
        puuid: null,
        name: null,
        profileIconId: null,
        revisionDate: null,
        summonerLevel: null,
        matches: [null]
    }
   },
   {
    upsert: true,
   }
  );
 });
};
export const config = {
 displayName: "Set Users Account",
 dbName: "SET_ACCOUNT",
};
