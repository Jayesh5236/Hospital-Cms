import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import patientRouter from "./Controllers/Admin/patient.js";
import doctorRouter from "./Controllers/Admin/doctor.js";
import userRouter from "./Controllers/User/index.js";
import dbCOnnect from "./Database/dbConnect.js";

const app = express();

// configure env
dotenv.config();

// Database Config
dbCOnnect();

// Middlewares
app.use(cors());
app.use(express.json()); //Bodyparser
app.use(morgan("dev")); //works for debugging not for development

app.get("/", (req, res) => {
  res.send("<h1>This is Working </h1>");
});

// ROutes
app.use("/api/user", userRouter);
app.use("/api/admin/patients", patientRouter);
app.use("/api/admin/doctors",doctorRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is Running Mode On ${PORT} `.bgYellow.black.bold);
});
