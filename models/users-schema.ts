import mongoose, { Schema } from "mongoose";

const stringDef = {type:"String", default: ''}
const numberDef = {type:"Number", default: 0}
const booleanDef = {type: 'Boolean'}

const usersSchema = new Schema({
  _id: stringDef,
 discord: 
  {
   memberId: stringDef,
   guildId: stringDef,
   discordRole: stringDef,
   rank: stringDef,
   totalLp: numberDef,
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
   ranked: {type: 'Object', default: {
    rankedFlexSr: 
     {
       leagueId: stringDef,
       queueType: stringDef,
       tier: stringDef,
       rank: stringDef,
       summonerId: stringDef,
       summonerName: stringDef,
       leaguePoints: numberDef,
       wins: numberDef,
       losses: numberDef,
       veteran: booleanDef,
       inactive: booleanDef,
       freshBlood: booleanDef,
       hotStreak: booleanDef,
     },
    rankedSolo5x5: 
     {
       leagueId: stringDef,
       queueType: stringDef,
       tier: stringDef,
       rank: stringDef,
       summonerId: stringDef,
       summonerName: stringDef,
       leaguePoints: numberDef,
       wins: numberDef,
       losses: numberDef,
       veteran: booleanDef,
       inactive: booleanDef,
       freshBlood: booleanDef,
       hotStreak: booleanDef,
     },
     rankedTftPairs:
       {
       queueType: stringDef,
       summonerId: stringDef,
       summonerName: stringDef,
       leaguePoints: numberDef,
       wins: numberDef,
       losses: numberDef,
       veteran: booleanDef,
       inactive: booleanDef,
       freshBlood: booleanDef,
       hotStreak: booleanDef,
       } 
   }, },
    
   matches: [stringDef],
  },
});

const name = "users_experimental"; // Name of the database
export default mongoose.models[name] || mongoose.model(name, usersSchema, name);
