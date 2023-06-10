import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  donor: {
    type: mongoose.ObjectId,
    ref: "users",
    required: true,
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

export default mongoose.model("donor", donorSchema);
