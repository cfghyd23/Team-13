import mongoose from "mongoose";
const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  bloodAvailable: [
    {
      bloodGroup: String,
      quantity: Number,
    },
  ],
});

export default mongoose.model("bloodbank", bloodBankSchema);
