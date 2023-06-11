import reqModel from "../models/reqModel.js";
import userModel from "../models/userModel.js";

export const createReqController = async (req, res) => {
  const { patient, quantity } = req.body;
  console.log(patient);
  if (!patient) {
    res.status(400).send({ message: "patient is required" });
  }
  if (!quantity) {
    res.status(400).send({ message: "quantity is required" });
  }
  try {
    const userReq = await userModel.findOne({ email: patient });

    console.log(userReq);
    const existingReq = await reqModel.findOne({ patient: patient });
    if (existingReq) {
      res.status(200).send({
        success: false,
        message: "User already created request",
      });
    }

    const newReq = await new reqModel({
      patient,
      quantity,
    }).save();
    console.log("hello");
    res.status(201).send({
      success: true,
      message: "Req created",
      newReq,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed while making request",
      error,
    });
  }
};

export const getRequest = async (req, res) => {
  try {
    const requests = await reqModel.find({});
    res.status(200).send({
      success: true,
      requests,
      message: "requests fetch successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting requests",
    });
  }
};
