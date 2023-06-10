import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello , welcome to website</h1>");
});

app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});
