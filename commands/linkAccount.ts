import { ICommand } from "wokcommands";
import usersSchema from "../models/users-schema";
import GaleforceModule from "galeforce";

const galeforce = new GaleforceModule();

export default {
 category: "Configuration",
 description: "The summoner you want to link to discord",
 slash: true,
 testOnly: true,
 options: [
  {
   name: "your-summoner-name", // Must be lower case
   description: "The summoner you want to link to discord",
   required: true,
   type: 3, // This argument is a string
  },
 ],

 callback: async ({ interaction, member }) => {
  const summonername = interaction.options.getString("your-summoner-name");

  const sendGetRequest = async () => {
    const profile = await galeforce.lol.summoner()
    .region(galeforce.region.lol.NORTH_AMERICA)
    .name(summonername)
    .exec()
   try {
    await interaction.reply({
     content: `Your summoner's name is now set to ${summonername}`,
    });
    console.log(member.id)
    await usersSchema.findOneAndUpdate(
        {
            _id: member.id // look for this and if theres none it creates it otherwise it updates it.
        },
        {
            league_of_legends: 
            {        
                id: profile.id,
                account_id: profile.accountId,
                puuid: profile.puuid,
                name: profile.name, 
                profile_icon_id: profile.profileIconId,
                revision_date: profile.revisionDate,
                summoner_level: profile.summonerLevel,
            }
        },
        {
        upsert: true, // look for this and if theres none it creates it otherwise it updates it.
        }
    );
   } catch (err) {
    await interaction.reply({
     content: `${summonername} does not exist`,
    });
   }
  };
  const data = await sendGetRequest();
 },
} as ICommand;
