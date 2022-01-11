import { Client, } from "discord.js"
import usersSchema from "../models/users-schema"

export default (client: Client,) => {
    client.on('guildMemberAdd', async member => {
        member.roles.add('925833005602320394')

        await usersSchema.findOneAndUpdate(
            {
            member_id: member.id, // look for this and if theres none it creates it otherwise it updates it.
            }, 
            {
            member_id: member.id,
            summonerName: '',
            totalLp: 0,
            rank: 'Iron IV',
            discordRole: '925833005602320394',
            puuid: '',
            profileIconId: 0,


            },
            {
            upsert: true       
            },
            )
    }) }
    export const config = {
        displayName: 'Set Users Account',
        dbName: 'SET_ACCOUNT'
    }

