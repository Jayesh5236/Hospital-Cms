import express from "express";
import Patient from "../../Models/Patient/patient.js";
import User from "../../Models/User/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register User

// login Patient
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(404).send({
      success: false,
      message: "Invalid Email OR Password",
    });
  }

  // Check User

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({
      success: false,
      message: "Email is not registerd",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(404).send({
      success: false,
      message: "Password Is Incorrect",
    });
  }

  // TOken
  const token = jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
    expiresIn: "7d",
  });

  res.status(200).send({
    success: true,
    message: "Login SuccessFull",
    user,
    token,
  });
});

export default router;
