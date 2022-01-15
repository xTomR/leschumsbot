import mongoose, { Schema } from "mongoose";

const stringDef = {type:"String", default: ''}
const numberDef = {type:"Number", default: 0}

const usersSchema = new Schema({
  _id: stringDef,
 discord: 
  {
   memberId: stringDef,
   guildId: stringDef,
   discordRole: stringDef,
   rank: stringDef,
   totalLp: numberDef
  },
 lol: 
  {
   id: stringDef,
   accountId: stringDef,
   puuid: stringDef,
   name: stringDef,
   profileIconId: stringDef,
   revisionDate: stringDef,
   summonerLevel: stringDef,
   ranked: [
    {
     rankedFlexSr: [
      {
       tier: stringDef,
       rank: stringDef,
       lp: numberDef,
       wins: numberDef,
       losses: numberDef,
      },
     ],
     rankedSolo5x5: [
      {
       tier: stringDef,
       rank: stringDef,
       lp: numberDef,
       wins: numberDef,
       losses: numberDef,
      },
     ],
    },
   ],
   matches: [stringDef],
  },
});

const name = "users_experimental"; // Name of the database
export default mongoose.models[name] || mongoose.model(name, usersSchema, name);
