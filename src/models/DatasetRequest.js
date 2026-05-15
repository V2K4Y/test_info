import mongoose from "mongoose";

const DatasetRequestSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    // textbook, qa, video, audio, medical, packs
    category: {
      type: String,
      required: true,
      enum: ["textbook", "qa", "video", "audio", "medical", "packs"],
    },
    // whether this was a sample request from catalog or a full data pack request
    kind: {
      type: String,
      required: true,
      enum: ["sample", "pack"],
    },
    // optional: which page / UI triggered the request
    source: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.DatasetRequest ||
  mongoose.model("DatasetRequest", DatasetRequestSchema);


