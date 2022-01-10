import mongoose, { Schema } from 'mongoose'

const matchSchema = new Schema({
    _id:  {type: String, dropDups: true},
    queueId: Number,
    participants: [],
    lpmultiplier: {type: Number, default: 0},
    done: {type: Boolean, default: false},
    expCounted:{type: Boolean, default: false}
})

const name = 'match'
export default mongoose.models[name] || 
    mongoose.model(name, matchSchema, name)