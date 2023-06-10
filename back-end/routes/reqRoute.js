import express from "express";
const router = express.Router();

router.post("/createreq", createReqController);

export default router;
