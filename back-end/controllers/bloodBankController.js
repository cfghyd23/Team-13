import bloodBankModel from "../models/bloodBankModel.js";

export const createBloodBankController = async (req, res) => {
  try {
    const { name, email, location, phone, bloodAvailable } = req.body;
    if (!name) {
      res.status(400).send({ message: "name is required" });
    }
    if (!email) {
      res.status(400).send({ message: "email is required" });
    }
    if (!location) {
      res.status(400).send({ message: "location is required" });
    }
    if (!phone) {
      res.status(400).send({ message: "phone is required" });
    }

    const existingUser = bloodBankModel.findOne({ email: email });
    if (!existingUser) {
      res.status(200).send({
        success: false,
        message: "The blood bank already exists",
      });
    }

    const newUser = await new bloodBankModel({
      name,
      email,
      location,
      phone,
      bloodAvailable,
    }).save();

    res.status(201).send({
      success: true,
      message: "Blood Bank created",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating bloodbank",
    });
  }
};
