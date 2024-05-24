import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  errorMiddleware,
  userRegistrationValidation,
} from "../../Middlewares/validations/index.js";
import User from "../../Models/User/index.js";

const router = express.Router();

/*
    API: Register User
    Method : POST
    Desc : User signup
    Access Type : Public
*/

router.post(
  "/register",
  userRegistrationValidation(),
  errorMiddleware,
  async (req, res) => {
    try {
      const { email, phone, password, role } = req.body;

      const emailFound = await User.findOne({ email });
      if (emailFound) {
        return res
          .status(409)
          .json({ error: "User Email Already Exists / Registered" });
      }

      const phoneFound = await User.findOne({ phone });
      if (phoneFound) {
        return res
          .status(409)
          .json({ error: "User phone Already Exists / Registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 15);

      const user = new User({
        ...req.body,
        password: hashedPassword,
      });

      await user.save();

      // Send success response after user is saved
      res.status(200).json({ success: "User Registered Successfully" });
    } catch (error) {
      console.error(error);
      // Send error response in case of any error
      res.status(500).json({
        success: false,
        message: "Error In Registration Controller",
        error,
      });
    }
  }
);

export default router;
