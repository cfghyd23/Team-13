import express from "express";
const router = express.Router();
import {
  loginController,
  createController,
  countController,
  getId,
} from "../controllers/loginCntrl.js";

import { body, validationResult } from "express-validator";

router.post(
  "/createuser",
  body("email", "enter a valid email").isEmail(),
  body("name", "min length is 5").isLength({ min: 5 }),
  body("password", "min length is 5").isLength({ min: 5 }),
  createController
);

router.post(
  "/loginuser",
  body("email", "enter a valid email").isEmail(),
  loginController
);

router.get("/total-count", countController);

router.post("/getid", getId);

export default router;
