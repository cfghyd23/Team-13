import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/Auth.js";
import bridgeRoute from "./routes/bridgeRoute.js";
import bloodBankRoute from "./routes/bloodBankRoute.js";
import requestRoute from "./routes/reqRoute.js";

dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoute);
app.use("/bridge", bridgeRoute);
app.use("/bloodbank", bloodBankRoute);
app.use("/request", requestRoute);
app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});
