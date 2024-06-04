import React from "react";
import CarouselHomepage from "../../Utils/Carousel-Homepage/CarouselHomepage";
import Navbar from "../Navbar/Navbar";
import { Footer } from "antd/es/layout/layout";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <div>
        <CarouselHomepage />
      </div>
       {/* Hero Section */}
       <div className="bg-gradient-to-r from-gray-700 to-black text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Hospital</h1>
        <p className="text-lg mb-8">
          Providing quality healthcare services with compassion and excellence.
        </p>
        <img 
          src="https://img.freepik.com/free-photo/happy-medical-team_1098-1881.jpg" 
          alt="Hero Image" 
          className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
        />
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p>24/7 emergency care services to handle any medical emergencies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
            <p>Comprehensive heart care services including diagnosis and treatment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
            <p>Specialized care for infants, children, and adolescents.</p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-gray-200 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">New Wing Inauguration</h3>
              <p>We are excited to announce the opening of our new hospital wing, dedicated to advanced surgical procedures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Free Health Camp</h3>
              <p>Join us for a free health camp this weekend, offering various health check-ups and consultations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
