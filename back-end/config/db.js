import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://team13:bloodwarrior@blood-warrior.zgscw5d.mongodb.net/users";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

export default connectDB;
