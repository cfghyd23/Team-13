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
    ref: "users",
  },
});

export default mongoose.model("bloodbridge", bridgeSchema);
