import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

import { body, validationResult } from "express-validator";

export const loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let email = req.body.email;

  try {
    let userdata = await userModel.findOne({ email });
    if (!userdata) {
      return res.status(400).json({ errors: "User does not exist" });
    }
    const pwdCompare = await bcrypt.compare(
      req.body.password,
      userdata.password
    );
    if (!pwdCompare) {
      return res.status(400).json({ errors: "Invalid password check again" });
    }
    const data = {
      user: {
        id: userdata.id,
      },
    };
    const authToken = jwt.sign(data, process.env.jwtSecret);
    return res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

export const createController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const salt = await bcrypt.genSalt(10);
  let secPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const { name, email, phone, address, group } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered please login",
      });
    }

    const newUser = await new userModel({
      name,
      email,
      password: secPassword,
      phone,
      address,
      group,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
