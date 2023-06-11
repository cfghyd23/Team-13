import express from "express";
const router = express.Router();
import { createReqController, getRequest } from "../controllers/reqController.js";

router.post("/createreq", createReqController);
router.post("/", getRequest);


export default router;
