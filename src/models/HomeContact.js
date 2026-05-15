import mongoose from "mongoose";

const HomeContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    services: [{ type: String }],
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.HomeContact ||
  mongoose.model("HomeContact", HomeContactSchema);


