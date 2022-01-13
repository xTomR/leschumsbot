import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  _id: String,
 discord: 
  {
   memberId: String,
   guildId: String,
   discordRole: String,
   rank: String,
   totalLp: {type:"Number", default: 0}
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

const name = "users_experimental"; // Name of the database
export default mongoose.models[name] || mongoose.model(name, usersSchema, name);
