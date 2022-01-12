import mongoose, { Schema } from "mongoose";

const matchSchema = new Schema({
 _id: { type: String, dropDups: true },
 queue_id: Number,
 participants: [],
 lp_multiplier: { type: Number, default: 0 },
 done: { type: Boolean, default: false },
 lp_counted: { type: Boolean, default: false },
});

const name = "match_experimental";
export default mongoose.models[name] || mongoose.model(name, matchSchema, name);
