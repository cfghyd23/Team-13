import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  patient: {
    type: mongoose.ObjectId,
    required: true,
    ref: "users",
  },
  hospital: {
    type: mongoose.ObjectId,
    required: true,
    ref: "bloodbank",
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  donors: [
    {
      type: mongoose.ObjectId,
      ref: "users",
    },
  ],
});

export default mongoose.model("requests", requestSchema);
