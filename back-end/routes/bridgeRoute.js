import express from "express";
import { bridgeCreateController } from "../controllers/bridgeController.js";

const router = express.Router();

router.post("/createbridge", bridgeCreateController);

export default router;
