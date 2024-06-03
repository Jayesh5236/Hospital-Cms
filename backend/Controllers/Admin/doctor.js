import express from "express";
import Doctor from "../../Models/Doctor/doctor.js";
import authMiddleware from "../../Middlewares/Auth/verifyToken.js";
const router = express.Router();

router.post("/doctor/add", authMiddleware, async (req, res) => {
  try {
    const { name, specialization, email, phone, password } = req.body;

    if (!name && !specialization && !email && !phone && !password) {
      return res.status(400).send({
        success: false,
        message: "All The Details Are Required",
      });
    }
    // Exiting Doctor
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(409).send({
        success: false,
        message: "Doctor Is Already Registered",
      });
    }

    const newDoctor = new Doctor(req.body);

    await newDoctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor Registered SuccessFully",
      newDoctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error Creating Doctor",
    });
  }
});

// Get All Doctors

router.get("/doctor/all", async (req, res) => {
  try {
    const doctors = await Doctor.find({});

    res.status(200).send({
      success: true,
      doctors,
      message: "Successfully Got All Doctors",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error Getting All Doctors",
    });
  }
});

// Updating Doctors

router.post("/doctor/update/:id", async (req, res) => {
  try {
    const { name, specialization, email, phone, password } = req.body;

    const { id } = req.params;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        specialization: req.body.specialization,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Doctor Updated successfully",
      updatedDoctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error Updating In Doctor COntroller",
    });
  }
});

// Delete Doctor By ID

router.delete("/doctor/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Doctor.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      message: "Patient Deleted SucessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Deleting Doctor Controller",
    });
  }
});

export default router;
