import bridgeModel from "../models/bridgeModel.js";

export const bridgeCreateController = async (req, res) => {
  try {
    const { patient, donors, hospital } = req.body;
    if (!patient) {
      return res.status(400).send({ message: "Patient is required" });
    }
    if (!hospital) {
      return res.status(400).send({ message: "Hospital should be selected" });
    }
    const existingUser = await bridgeModel.findOne({ _id: patient });
    if (!existingUser) {
      return res.status(200).send({
        success: false,
        message:
          "User already has a bridge please try to update it is the dashboard",
      });
    }
    const newUser = await new bridgeModel({
      patient,
      donors,
      hospital,
    }).save();

    res.status(201).send({
      success: true,
      message: "Patient bridge created",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating bridge",
      error,
    });
  }
};

export const getBridgeController = async (req, res) => {
  try {
    const bridges = await bridgeModel.find({});
    res.status(200).send({
      success: true,
      message: "All blood banks",
      bridges,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting bloodbank",
    });
  }
};
