import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import AboutPage from "./Components/About/AboutPage";
import toast, { Toaster } from 'react-hot-toast';
import HospitalFooter from "./Components/Footer/HospitalFooter";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import AdminRoutes from "./Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import PatientManagement from "./Pages/Admin/AdminFunction/PatientManagement";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


      <Route path="/dashboard" element={<AdminRoutes />}>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/create-patient" element={<PatientManagement />} />
      </Route>
      </Routes>
      <HospitalFooter />
    </BrowserRouter>
  );
}

export default App;
