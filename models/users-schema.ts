import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  _id: String,
 discord: 
  {
   memberId: String,
   guildId: String,
   discordRole: String,
   rank: String,
   totalLp: Number,
  },
 lol: 
  {
   id: String,
   accountId: String,
   puuid: String,
   name: String,
   profileIconId: Number,
   revisionDate: Number,
   summonerLevel: Number,
   ranked: [
    {
     rankedFlexSr: [
      {
       tier: String,
       rank: String,
       lp: Number,
       wins: Number,
       losses: Number,
      },
     ],
     rankedSolo5x5: [
      {
       tier: String,
       rank: String,
       lp: Number,
       wins: Number,
       losses: Number,
      },
     ],
    },
   ],
   matches: [String],
  },
});

const name = "users_experimental";
export default mongoose.models[name] || mongoose.model(name, usersSchema, name);
