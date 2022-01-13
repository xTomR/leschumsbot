import mongoose, { Schema } from "mongoose";

const matchSchema = new Schema({
 _id: { type: String, dropDups: true },
 queueId: Number,
 participants: [],
 lpMultiplier: { type: Number, default: 0 },
 done: { type: Boolean, default: false },
 lpCounted: { type: Boolean, default: false },
});

const name = "match_experimental"; // Name of the database
export default mongoose.models[name] || mongoose.model(name, matchSchema, name);
