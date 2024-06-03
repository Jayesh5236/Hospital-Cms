import express from "express";
import Patient from "../../Models/Patient/patient.js";
import User from "../../Models/User/index.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Create Patient
router.post("/add", async (req, res) => {
    try {
      const {
        name,
        dateOfBirth,
        age,
        address,
        gender,
        phone,
        email,
        medicalHistory,
      } = req.body;
  
      if (
        !name &&
        !dateOfBirth &&
        !age &&
        !address &&
        !gender &&
        !phone &&
        !email
      ) {
        return res.status(400).send({
          success: false,
          message: "All The Details Are Required",
        });
      }
  
      // exitingUSer
      const existingPatient = await Patient.findOne({ email });
      if (existingPatient) {
        return res.status(409).send({
          success: false,
          message: "Patient already Registered",
        });
      }
  
      const newPatient = new Patient(req.body);
  
      await newPatient.save();
  
      res.status(201).send({
        success: true,
        message: "Patient Registered SuccessFully",
        newPatient,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal Server Error In Creating New Patient",
      });
    }
  });
  
  // Get All Patients
  
  router.get("/", async (req, res) => {
    try {
      const patients = await Patient.find({});
  
      res.status(200).send({
        success: true,
        patients,
        message: "All Patients",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal Server Error In Getting All Patients",
      });
    }
  });
  
  // Updating A PAtients
  router.post("/update/:id", async (req, res) => {
    try {
      const {
        name,
        dateOfBirth,
        age,
        address,
        gender,
        phone,
        email,
        medicalHistory,
      } = req.body;
  
      const { id } = req.params;
  
      const updatedPatient = await Patient.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          dateOfBirth: req.body.dateOfBirth,
          age: req.body.age,
          address: req.body.address,
          gender: req.body.gender,
          phone: req.body.phone,
          email: req.body.email,
          medicalHistory: req.body.medicalHistory,
        },
        { new: true }
      );
  
      res.status(200).send({
        success: true,
        message: "Patient Updated SuccessFully",
        updatedPatient,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal Server Error In Updating Patients",
      });
    }
  });
  
  // Delete Patient By Id
  
  router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      await Patient.findByIdAndDelete(id);
  
      res.status(201).send({
        success: true,
        message: "Patient Deleted SucessFully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal Server Error In Deleting Patients",
      });
    }
  });
  
  export default router;
  