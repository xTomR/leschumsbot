import { Client } from "discord.js";
import usersSchema from "../models/users-schema";
import Galeforce from "galeforce";
const galeforce = new Galeforce();

export default async (client: Client) => {

    const getRankedStats = async ()  => {const users = await usersSchema.find({}).exec();
    users.forEach(async user =>  {
        const league = await galeforce.lol.league.entries()
        .region(galeforce.region.lol.NORTH_AMERICA)
        .summonerId(user.lol.id)
        .exec()
        for(let i=0;i < league.length; i++){
            const {leagueId, queueType, tier, rank, summonerId, summonerName, leaguePoints, wins, losses, veteran, inactive, freshBlood, hotStreak} = league[i] || {}
            if(queueType === 'RANKED_SOLO_5x5'){
                const filter = { _id: user._id}
                const update = { 
                    'lol.ranked.rankedSolo5x5.leagueId': leagueId,
                    'lol.ranked.rankedSolo5x5.queueType': queueType,
                    'lol.ranked.rankedSolo5x5.tier': tier,
                    'lol.ranked.rankedSolo5x5.rank': rank,
                    'lol.ranked.rankedSolo5x5.summonerId': summonerId,
                    'lol.ranked.rankedSolo5x5.summonerName': summonerName,
                    'lol.ranked.rankedSolo5x5.leaguePoints': leaguePoints,
                    'lol.ranked.rankedSolo5x5.wins': wins,
                    'lol.ranked.rankedSolo5x5.losses': losses,
                    'lol.ranked.rankedSolo5x5.veteran': veteran,
                    'lol.ranked.rankedSolo5x5.inactive': inactive,
                    'lol.ranked.rankedSolo5x5.freshBlood': freshBlood,
                    'lol.ranked.rankedSolo5x5.hotsreak': hotStreak,
                }
                const upsert = {upsert: true}
                await usersSchema.findOneAndUpdate(filter, update, upsert)            
            } else if(queueType === 'RANKED_FLEX_SR'){
                const filter = { _id: user._id}
                const update = { 
                    'lol.ranked.rankedFlexSr.leagueId': leagueId,
                    'lol.ranked.rankedFlexSr.queueType': queueType,
                    'lol.ranked.rankedFlexSr.tier': tier,
                    'lol.ranked.rankedFlexSr.rank': rank,
                    'lol.ranked.rankedFlexSr.summonerId': summonerId,
                    'lol.ranked.rankedFlexSr.summonerName': summonerName,
                    'lol.ranked.rankedFlexSr.leaguePoints': leaguePoints,
                    'lol.ranked.rankedFlexSr.wins': wins,
                    'lol.ranked.rankedFlexSr.losses': losses,
                    'lol.ranked.rankedFlexSr.veteran': veteran,
                    'lol.ranked.rankedFlexSr.inactive': inactive,
                    'lol.ranked.rankedFlexSr.freshBlood': freshBlood,
                    'lol.ranked.rankedFlexSr.hotsreak': hotStreak,
                }
                const upsert = {upsert: true}
                await usersSchema.findOneAndUpdate(filter, update, upsert) 

            } else if(queueType === 'RANKED_TFT_PAIRS'){
                const filter = { _id: user._id}
                const update = { 
                    'lol.ranked.rankedTftPairs.queueType': queueType,
                    'lol.ranked.rankedTftPairs.summonerId': summonerId,
                    'lol.ranked.rankedTftPairs.summonerName': summonerName,
                    'lol.ranked.rankedTftPairs.leaguePoints': leaguePoints,
                    'lol.ranked.rankedTftPairs.wins': wins,
                    'lol.ranked.rankedTftPairs.losses': losses,
                    'lol.ranked.rankedTftPairs.veteran': veteran,
                    'lol.ranked.rankedTftPairs.inactive': inactive,
                    'lol.ranked.rankedTftPairs.freshBlood': freshBlood,
                    'lol.ranked.rankedTftPairs.hotsreak': hotStreak,
                }
                const upsert = {upsert: true}
                await usersSchema.findOneAndUpdate(filter, update, upsert) 
            }
        }
    })}
    try{setInterval(getRankedStats, 120000)} catch (err){
        console.log(err)
    }
}
   
export const config = {
    displayName: 'getRankedStats',
    dbName: 'GETRANKEDSTATS'}