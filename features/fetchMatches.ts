import { Client } from "discord.js";
import usersSchema from "../models/users-schema";
import matchSchema from "../models/match-schema";
import GaleforceModule from "galeforce";

const galeforce = new GaleforceModule();

export default (client: Client) => {
 // fetch the 20 last matches from each users in the database.
 const fetchMatches = async () => {
  const users = await usersSchema.find({}).exec();
  for (const eachUser of users) {
   const matchIds = await galeforce.lol.match
    .list()
    .region(galeforce.region.riot.AMERICAS)
    .puuid(eachUser.lol.puuid)
    .exec();
   await usersSchema.findOneAndUpdate(
    { puuid: eachUser.lol.puuid },
    { $addToSet: {'lol.matches': matchIds}}
   );
   console.log(`The last 20 matches of ${eachUser.lol.name} fetched`);
  }
 };
 // totalmatches is all the matches from users merged together
 const totalMatches = async () => {
  await fetchMatches();
  const users = await usersSchema.find({}).exec();
  let totalmatches = [];
  for (let i = 0; i < users.length; i++) {
   for (let j = 0; j < users[i].lol.matches.length; j++) {
    totalmatches.push(users[i].lol.matches[j]);
   }
  }
  const totalMatchesUnique = [...new Set(totalmatches)];
  console.log(`${totalMatchesUnique.length} matches in the database`);
  return totalMatchesUnique;
 };
 // matchInfo is a function to get the queueid and the participants of each matches and then logs it in the database
 const matchInfo = async () => {
     
  let totalmatches = await totalMatches();
  for (const eachMatch of totalmatches) {
   const getMatchInfo = await galeforce.lol.match
    .match()
    .region(galeforce.region.riot.AMERICAS)
    .matchId(eachMatch)
    .exec();
   await matchSchema.findOneAndUpdate(
    { _id: eachMatch },
    {
     queueId: getMatchInfo.info.queueId,
     participants: getMatchInfo.metadata.participants,
    },
    { upsert: true }
   );
  }
 };
 // Increment the lpmultiplier when the puuid matches
 const lpIncMatches = async () => {
  await matchInfo();
  const users = await usersSchema.where("puuid");
  for (const eachUser of users) {
   await matchSchema.updateMany(
    { $and: [{ participants: eachUser.lol.puuid }, { done: false }] },
    { $inc: { lpMultiplier: 1 } }
   );
  }
  await matchSchema.updateMany({}, { done: "true" });
  console.log("lpMultiplier has been set.");
 };
 // all the functions above in 1 call
 const fetch = () => {
  lpIncMatches();
 };
//  fetch() // for immediate test
 setInterval(fetch, 5 * 60000); //Every 5 minutes
};
export const config = {
 displayName: "Fetch Matches",
 dbName: "FETCH_MATCHES",
};
