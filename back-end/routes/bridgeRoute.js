import express from "express";
import {
  bridgeCreateController,
  getBridgeController,
} from "../controllers/bridgeController.js";

const router = express.Router();

router.post("/createbridge", bridgeCreateController);

router.get("/", getBridgeController);

export default router;
