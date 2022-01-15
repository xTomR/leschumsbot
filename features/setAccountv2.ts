import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default async (client: Client) => {
    const guild = client.guilds.cache.get("924806922874552320");

    const everyMember = guild.members.cache.each(async member => {

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
        //   lol:
        //   {
        //       id: null,
        //       accountId: null,
        //       puuid: null,
        //       name: null,
        //       profileIconId: null,
        //       revisionDate: null,
        //       summonerLevel: null,
        //       matches: [null]
        //   }
         },
         {
          upsert: true,
         }
        );

    })
    }
