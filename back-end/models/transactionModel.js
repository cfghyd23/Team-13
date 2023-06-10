import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
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
  donor: {
    type: mongoose.ObjectId,
    ref: "users",
  },
});

export default mongoose.model("transactions", transactionSchema);
