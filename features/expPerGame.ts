import { Client } from "discord.js"
import usersSchema from "../models/users-schema"
import matchSchema from "../models/match-schema"


export default (client: Client) => {
    const getExpPerGame = async () =>{
        const users = await usersSchema.find({}).exec()
        const lpBasic = 5 // Basic lp from games
        const findLp1 = async () => {
                 // Each match that has 1 as lpmultiplier
            const lp1 = await matchSchema.find({ $and:[{'lpmultiplier': 1 },{'expCounted': false}] })
            for(const eachMatch of lp1){
                for(const eachUser of users){   
                    if(eachMatch.participants.includes(eachUser.puuid)){
                        await usersSchema.updateOne({'puuid': eachUser.puuid},{ $inc:{'totalLp': lpBasic}})            
                    }                  
                }
            }
            await matchSchema.updateMany({ $and:[{'lpmultiplier': 1 },{'expCounted': 'false'}]},{'expCounted': true})
            console.log(`There's ${lp1.length} matches with lpmultiplier at 1`)         
            
        }
        findLp1()
        const findLp2 = async () => {
            // lp2 = every match that has lpmultiplier at 2
            const lp2 = await matchSchema.find({ $and:[{'lpmultiplier': 2 },{'expCounted': false}] })
            for(const eachMatch of lp2){
                for(const eachUser of users){   
                    if(eachMatch.participants.includes(eachUser.puuid)){
                        await usersSchema.updateOne({'puuid': eachUser.puuid},{ $inc:{'totalLp': lpBasic*2}})            
                    }                  
                }
            }
            await matchSchema.updateMany({ $and:[{'lpmultiplier': 2 },{'expCounted': 'false'}]},{'expCounted': true})
            console.log(`There's ${lp2.length} matches with lpmultiplier at 2`)  
        }
        findLp2()
        const findLp3 = async () => {
            // lp3 = every match that has lpmultiplier at 3
            const lp3 = await matchSchema.find({ $and:[{'lpmultiplier': 3 },{'expCounted': false}] })
            for(const eachMatch of lp3){
                for(const eachUser of users){   
                    if(eachMatch.participants.includes(eachUser.puuid)){
                        await usersSchema.updateOne({'puuid': eachUser.puuid},{ $inc:{'totalLp': lpBasic*3}})            
                    }                  
                }
            }
            await matchSchema.updateMany({ $and:[{'lpmultiplier': 3 },{'expCounted': 'false'}]},{'expCounted': true})
            console.log(`There's ${lp3.length} matches with lpmultiplier at 3`)
        }
        findLp3()
        const findLp4 = async () => {
            // lp4 = every match that has lpmultiplier at 4
            const lp4 = await matchSchema.find({ $and:[{'lpmultiplier': 4 },{'expCounted': false}] })
            for(const eachMatch of lp4){
                for(const eachUser of users){   
                    if(eachMatch.participants.includes(eachUser.puuid)){
                        await usersSchema.updateOne({'puuid': eachUser.puuid },{ $inc:{'totalLp': lpBasic*4}})            
                    }                  
                }
            }
            await matchSchema.updateMany({ $and:[{'lpmultiplier': 4 },{'expCounted': 'false'}]},{'expCounted': true})
            console.log(`There's ${lp4.length} matches with lpmultiplier at 4`)         
        
        }
        findLp4()
        const findLp5 = async () => {
            // lp5 = every match that has lpmultiplier at 5
            const lp5 = await matchSchema.find({ $and:[{'lpmultiplier': 5 },{'expCounted': false}] })
            for(const eachMatch of lp5){
                for(const eachUser of users){   
                    if(eachMatch.participants.includes(eachUser.puuid)){
                        await usersSchema.updateOne({'puuid': eachUser.puuid},{ $inc:{'totalLp': lpBasic*5}})            
                    }                  
                }
            }
            await matchSchema.updateMany({ $and:[{'lpmultiplier': 5 },{'expCounted': 'false'}]},{'expCounted': true})
            console.log(`There's ${lp5.length} matches with lpmultiplier at 5`)       
        
        }
        findLp5()
    }
    // getExpPerGame()
   setInterval(getExpPerGame, 7*60000) // Every 7 minutes  
}

export const config = {
    displayName: 'Exp per game',
    dbName: 'EXP_PER_GAME'}