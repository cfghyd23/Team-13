import express from "express";
import {
  createBloodBankController,
  getBloodBankController,
} from "../controllers/bloodBankController.js";
const router = express.Router();

router.post("/createbloodbank", createBloodBankController);

router.get("/", getBloodBankController);

export default router;
