import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default (client: Client) => {
 client.on("guildMemberAdd", async (member) => {
  member.roles.add("925833005602320394");

  await usersSchema.findOneAndUpdate(
   {
    discord: {'member_id': member.id}, // look for this and if theres none it creates it otherwise it updates it.
   },
   {
    discord:
    {
        member_id: member.id,
        guild_id: "924806922874552320",
        discord_role: "925833005602320394",
        rank: "Iron IV",
        total_lp: null,
    },
    league_of_legends:
    {
        id: null,
        account_id: null,
        puuid: null,
        name: null,
        profile_icon_id: null,
        revision_date: null,
        summoner_level: null,
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
