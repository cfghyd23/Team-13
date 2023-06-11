import express from "express";
import {
  createReqController,
  getRequest,
} from "../controllers/reqController.js";
const router = express.Router();

router.post("/createreq", createReqController);
router.post("/", getRequest);

export default router;
