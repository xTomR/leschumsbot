import { ICommand } from "wokcommands";
import usersSchema from '../models/users-schema';
import axios from 'axios';

export default {
    category: 'Configuration',
    description: 'The summoner you want to link to discord',
    slash: true,
    testOnly: true,
    options: [
        {
          name: 'your-summoner-name', // Must be lower case
          description: 'The summoner you want to link to discord',
          required: true,
          type: 3, // This argument is a string
        },
      ],

    callback: async ({interaction, member}) => {
      const summonername = interaction.options.getString('your-summoner-name')
      let uri = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonername}?api_key=${process.env.RIOT_API}`
          
      const sendGetRequest = async () => {
        try {
          const resp = await axios.get(uri)
            await interaction.reply({
              content: `Your summoner's name is now set to ${summonername}`,})
              await usersSchema.findOneAndUpdate({
              member_id: member.id,
              }, 
              {             
              member_id: member.id,
              profileIconId: resp.data.profileIconId,
              puuid: resp.data.puuid,
              accountId: resp.data.accoundId,
              summonerName: summonername,
              },
              {
              upsert: true  // look for this and if theres none it creates it otherwise it updates it.     
              },
              )
          } catch (err) {
              await interaction.reply({
                content: `${summonername} does not exist`,})
          }
      };
      const data = await sendGetRequest()
    }
} as ICommand