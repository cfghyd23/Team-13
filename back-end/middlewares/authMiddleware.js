import jwt from "jsonwebtoken";
import bloodBankModel from "../models/bloodBankModel.js";

export const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.jwtSecret);
    // Attach the decoded user information to the request object
    req.user = decoded.user;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const isBloodBank = async (req, res, next) => {
  try {
    const bloodBank = await bloodBankModel.findById(req.bloodbank._id);
    if (!bloodBank) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in bloodBank middleware",
    });
  }
};
