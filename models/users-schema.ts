import mongoose, { Schema } from 'mongoose'

const usersSchema = new Schema({
    discord: [{
        member_id: String,
        guild_id: String,
        discord_role: String,
        rank: String,
        total_lp: Number,      
    }],
    league_of_legends: [{
        id: String,
        account_id: String,
        puuid: String,
        name: String,
        profile_icon_id: Number,
        revision_date: Number,
        summoner_level: Number,
        ranked: [{
            ranked_flex_sr: [{
                tier: String,
                rank: String,
                lp: Number,
                wins: Number,
                losses: Number,
            }],
            ranked_solo_5x5: [{
                tier: String,
                rank: String,
                lp: Number,
                wins: Number,
                losses: Number,
            }]
        }],
        matches: [String],

    }],
      
})

const name = 'users'
export default mongoose.models[name] || 
    mongoose.model(name, usersSchema, name)