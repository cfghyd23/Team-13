import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/Auth.js";
import bridgeRoute from "./routes/bridgeRoute.js";

dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoute);
app.use("/bridge", bridgeRoute);

app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});
