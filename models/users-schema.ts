import mongoose, { Schema } from 'mongoose'

const usersSchema = new Schema({
    member_id: String,
    guild_id: String,
    summonerName: String,
    totalLp: Number,
    rank: String,
    discordRole: String,
    puuid: String,
    matches: [String],
})

const name = 'users'
export default mongoose.models[name] || 
    mongoose.model(name, usersSchema, name)