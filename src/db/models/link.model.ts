import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const Link = mongoose.model("Link", linkSchema);
