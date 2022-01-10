import { Client } from "discord.js"
import usersSchema from "../models/users-schema"

export default (client: Client) => {
        const testFunction = async () => {
            const allRoles = () => {
                const allRoles = new Map()
                allRoles.set('Iron I','929796439427653642')
                allRoles.set('Iron II','929796490275205120')
                allRoles.set('Iron III','929796526925049907')
                allRoles.set('Iron IV','925833005602320394') 
                allRoles.set('Bronze I','929796334691700797')
                allRoles.set('Bronze II','929796370020319302')
                allRoles.set('Bronze III','929796392258519051')
                allRoles.set('Bronze IV','929796413913706516')
                allRoles.set('Silver I','929796217880330290')
                allRoles.set('Silver II','929796255687802961')
                allRoles.set('Silver III','929796280933318656')
                allRoles.set('Silver IV','929796310792540171')
                allRoles.set('Gold I','929796089001959485')
                allRoles.set('Gold II','929796125253320735')
                allRoles.set('Gold III','929796154168844359')
                allRoles.set('Gold IV','929796193683406868')
                allRoles.set('Platinum I','929795905752805386')
                allRoles.set('Platinum II','929796019129024512')
                allRoles.set('Platinum III','929796045993574430')
                allRoles.set('Platinum IV','929796067770388521')
                allRoles.set('Diamond I','929795768074784798')
                allRoles.set('Diamond II','929795805475381258')
                allRoles.set('Diamond III','929795834902642778')
                allRoles.set('Diamond IV','929795859820998726')
                allRoles.set('Master','929795725901049956')
                allRoles.set('Grandmaster','929795664857170010')
                allRoles.set('Challenger','929795524687704144')
                return allRoles
            }
            const roles = allRoles()
            const users = await usersSchema.find({}).exec()
            const guild = client.guilds.cache.get('924806922874552320')
            if (!guild) return
            for(const eachUser of users){
                console.log(eachUser.rank)
                console.log(eachUser.totalLp)
                const member = guild.members.cache.get(eachUser.member_id) || await guild.members.fetch(eachUser.member_id).catch(() => null)
                if (!member) return
                if(eachUser.totalLp >= 100 && eachUser.totalLp < 200){
                    member.roles.add(roles.get('Iron III'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Iron III'})
                } else if (eachUser.totalLp >= 200 && eachUser.totalLp < 300){
                    member.roles.add(roles.get('Iron II'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Iron II'})
                } else if (eachUser.totalLp >= 300 && eachUser.totalLp < 400){
                    member.roles.add(roles.get('Iron I'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Iron I'})
                }  else if (eachUser.totalLp >= 400 && eachUser.totalLp < 500){
                    member.roles.add(roles.get('Bronze IV'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Bronze IV'})
                }  else if (eachUser.totalLp >= 500 && eachUser.totalLp < 600){
                    member.roles.add(roles.get('Bronze III'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Bronze III'})
                }  else if (eachUser.totalLp >= 600 && eachUser.totalLp < 700){
                    member.roles.add(roles.get('Bronze II'))
                    await usersSchema.updateOne({'puuid': eachUser.puuid},{'rank': 'Bronze II'})             
                }  else if (eachUser.totalLp >= 700 && eachUser.totalLp < 800){
                    member.roles.add(roles.get('Bronze I'))            
                }  else if (eachUser.totalLp >= 800 && eachUser.totalLp < 900){
                    member.roles.add(roles.get('Silver IV'))
                }  else if (eachUser.totalLp >= 900 && eachUser.totalLp < 1000){
                    member.roles.add(roles.get('Silver III'))
                }  else if (eachUser.totalLp >= 1000 && eachUser.totalLp < 1100){
                    member.roles.add(roles.get('Silver II'))
                }  else if (eachUser.totalLp >= 1100 && eachUser.totalLp < 1200){
                    member.roles.add(roles.get('Silver I'))
                }  else if (eachUser.totalLp >= 1200 && eachUser.totalLp < 1300){
                    member.roles.add(roles.get('Gold IV'))
                }  else if (eachUser.totalLp >= 1300 && eachUser.totalLp < 1400){
                    member.roles.add(roles.get('Gold III'))
                }  else if (eachUser.totalLp >= 1400 && eachUser.totalLp < 1500){
                    member.roles.add(roles.get('Gold II'))
                }  else if (eachUser.totalLp >= 1500 && eachUser.totalLp < 1600){
                    member.roles.add(roles.get('Gold I'))
                }  else if (eachUser.totalLp >= 1600 && eachUser.totalLp < 1700){
                    member.roles.add(roles.get('Platinum IV'))
                }  else if (eachUser.totalLp >= 1700 && eachUser.totalLp < 1800){
                    member.roles.add(roles.get('Platinum III'))
                }  else if (eachUser.totalLp >= 1800 && eachUser.totalLp < 1900){
                    member.roles.add(roles.get('Platinum II'))
                }  else if (eachUser.totalLp >= 1900 && eachUser.totalLp < 2000){
                    member.roles.add(roles.get('Platinum I'))
                }  else if (eachUser.totalLp >= 2000 && eachUser.totalLp < 2100){
                    member.roles.add(roles.get('Diamond IV'))
                }  else if (eachUser.totalLp >= 2100 && eachUser.totalLp < 2200){
                    member.roles.add(roles.get('Diamond III'))
                }  else if (eachUser.totalLp >= 2200 && eachUser.totalLp < 2300){
                    member.roles.add(roles.get('Diamond II'))
                }  else if (eachUser.totalLp >= 2300 && eachUser.totalLp < 2400){
                    member.roles.add(roles.get('Diamond I'))
                }  else if (eachUser.totalLp >= 2400 && eachUser.totalLp < 2500){
                    member.roles.add(roles.get('Master'))
                }  else if (eachUser.totalLp >= 2500 && eachUser.totalLp < 2600){
                    member.roles.add(roles.get('Grandmaster'))
                }  else if (eachUser.totalLp >= 2600){
                    member.roles.add(roles.get('Challenger'))
                }
            }
                
        }
        testFunction()
        setInterval(testFunction,3*60000)
        
    }
    export const config = {
        displayName: 'testing',
        dbName: 'TEST'
    }