import usersSchema from "../models/users-schema";
import matchSchema from "../models/match-schema";
import GaleforceModule from "galeforce";
import {promiseCheck} from "./errorHandler"

const galeforce = new GaleforceModule();

export default async () => {

  const matches = async () => {
    const fetchMatches = async () => {
    
      const usersLolAccountSet = async () => {    
        const getUsersLolAccountSet = () => {
        const users = usersSchema.find({'discord.lolAccountSet': true})
        .exec()
        return users
      }
  
      const usersLolAccountSetCheck = await promiseCheck(getUsersLolAccountSet())
      return usersLolAccountSetCheck.result
      }
   
      const matchId = async (user) => {
          const getMatchIds = async () => {
            const matchIds = await galeforce.lol.match
            .list()
            .region(galeforce.region.riot.AMERICAS)
            .puuid(user.lol.puuid)
            .exec();
          return matchIds
          }
  
        const matchIds = await promiseCheck(getMatchIds())
        return matchIds.result
      }
  
      const setMatchInDatabase = async (matches, user) => {
        const filter = { "lol.puuid": user.lol.puuid };
        const update = { $addToSet: { "lol.matches": matches } };
        await usersSchema.findOneAndUpdate(filter, update);
      }
  
      const users = await usersLolAccountSet()
  
      const fetchMatchesOfUsers = async () => {
        if(users != undefined){
          for(const user of users){
            const matches = await matchId(user)
            if(matches != undefined){
              setMatchInDatabase(matches, user)
            } else {
              console.error(`matchId() returned undefined`)
            }
          }
        } else {
          console.error(`userLolAccountSet() returned undefined`)
        }
        console.log("Matches set.")
      }
  
      await fetchMatchesOfUsers()
      return users
    }
    const users = await fetchMatches()
  
  
    const totalMatches = async (users) => {
      const getEveryMatches = (users) => {
        let totalmatches = [];
        for (let i = 0; i < users.length; i++) {
          for (let j = 0; j < users[i].lol.matches.length; j++) {
            totalmatches.push(users[i].lol.matches[j]);
          }
          }
          return totalmatches
      }
      const everyMatches = getEveryMatches(users)
  
  
      const getUniqueMatches = (matches) => {
        const totalmatches = [...new Set(matches)];
        return totalmatches
      }
      const totalMatchesUnique = getUniqueMatches(everyMatches)
      console.log(`${totalMatchesUnique.length} matches counted`);
      return totalMatchesUnique;
    };
    const matchesCounted = await totalMatches(users)
  
    const MatchesInDB = async () => {    
      const getMatchesInDB = () => {
      const matchesDB = matchSchema.find({})
      .exec()
      return matchesDB
    }
  
    const matchesDBCheck = await promiseCheck(getMatchesInDB())
    return matchesDBCheck.result
    }
    const matchesInDB = await MatchesInDB()
  
  
    const matchesInDBToArray = async (matches) => {
      const getEveryMatchesId = (matches) => {
        let matchesInArray = []
        for(let i = 0; i < matches.length; i++){
          matchesInArray.push(matches[i]._id)       
        }
        return matchesInArray
      }
      const matchesInArray = getEveryMatchesId(matches)
      return matchesInArray
    }
    const matchesDBTotal = await matchesInDBToArray(matchesInDB)
  
  
    const compareMatchesToDatabase = (matches, matchesDBTotal) => {
  
      let newArray = matches.filter((match) => !matchesDBTotal.includes(match))
      return newArray
    }
    const matchesNotInDB = compareMatchesToDatabase(matchesCounted, matchesDBTotal)
  
  
    const testMatchInfo = async (matches) => {
      
      const matchInfo = async (matches) => {
        const getMatchInfo = async (matchid) => {
          const matchMetaData = await galeforce.lol.match
          .match()
          .region(galeforce.region.riot.AMERICAS)
          .matchId(matchid)
          .exec();
          return matchMetaData
        }   
        for (const match of matches) {
          const matchInfoSet = await promiseCheck(getMatchInfo(match))
  
          const setMatchInfoInDatabase = async (match, matchInfo) => {
            const filter = { _id: match}
            const update = {queueId: matchInfo.info.queueId, participants: matchInfo.metadata.participants}
            const upsert = {upsert: true}
            await matchSchema.findOneAndUpdate(filter, update, upsert)
            }
          if(matchInfoSet.result != undefined){
            setMatchInfoInDatabase(match, matchInfoSet.result)
          } else {
            console.log('error getting to the database')
          }       
        }
      }
      matchInfo(matches)
    };
    await testMatchInfo(matchesNotInDB)
  
  
    const lpIncMatches = async (users) => {
        for (const eachUser of users) {
          const getMatchesAndUpdate = async (user) => {
            const filter = { $and: [{ participants: user.lol.puuid }, { done: false }] }
            const update = { $inc: { lpMultiplier: 1 } }
            await matchSchema.updateMany(filter, update);
          }
          await getMatchesAndUpdate(eachUser)
        }  
    };
    await lpIncMatches(users);

    const updateDoneToTrue = async () => {
      await matchSchema.updateMany({}, { done: "true" });
      console.log("lpMultiplier has been set.");
    }
    await updateDoneToTrue()
  }
  setInterval(matches, 60000) 
}

export const config = {
 displayName: "Fetch Matches",
 dbName: "FETCH_MATCHES",
};
 