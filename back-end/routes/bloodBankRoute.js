import express from "express";
import { createBloodBankController } from "../controllers/bloodBankController.js";
const router = express.Router();

router.post("/createbloodbank", createBloodBankController);

export default router;
