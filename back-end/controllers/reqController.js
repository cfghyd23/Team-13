import reqModel from "../models/reqModel.js";

export const createReqController = async (req, res) => {
  const { patient, hospital, quantity } = req.body;
  if (!patient) {
    res.status(400).send({ message: "patient is required" });
  }
  if (!hospital) {
    res.status(400).send({ message: "hospital is required" });
  }
  if (!quantity) {
    res.status(400).send({ message: "quantity is required" });
  }
  try {
    const existingReq = await reqModel.findOne({ patient: patient });
    if (existingReq) {
      res.status(200).send({
        success: false,
        message: "User already created request",
      });
    }

    const newReq = await new reqModel({
      patient,
      hospital,
      quantity,
    }).save();

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
