import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone :{
      type :String,
      required :true,
      unique :true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Doctor", "Nurse", "Receptionist", "Patient"],
      default: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "User");
