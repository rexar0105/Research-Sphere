import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  papers: { type: Array, default: [] }
}, { timestamps: true });

export default mongoose.model("Collection", collectionSchema);