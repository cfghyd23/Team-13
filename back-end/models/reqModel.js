import mongoose from "mongoose";

const reqSchema = new mongoose.Schema({
  patient: {
    type: mongoose.ObjectId,
    ref: "users",
    required: true,
    unique: true,
  },
  hospital: {
    type: mongoose.ObjectId,
    ref: "bloodbank",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("requests", reqSchema);
