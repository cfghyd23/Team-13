import express from "express";
import { createReqController, getRequest } from "../controllers/reqController.js";
const router = express.Router();
import { createReqController, getRequest } from "../controllers/reqController.js";

router.post("/createreq", createReqController);
router.get("/", getRequest);

export default router;
