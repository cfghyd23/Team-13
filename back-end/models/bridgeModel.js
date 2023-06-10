import mongoose, { mongo } from "mongoose";
const bridgeSchema = new mongoose.Schema({
  patient: {
    type: mongoose.ObjectId,
    ref: "users",
  },
  donors: [
    {
      type: mongoose.ObjectId,
      ref: "users",
    },
  ],
  location: {
    type: mongoose.ObjectId,
    ref: "bloodbank",
  },
  index: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("bloodbridge", bridgeSchema);
