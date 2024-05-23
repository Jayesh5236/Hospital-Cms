import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img
            className="w-12 h-12"
            src="https://st2.depositphotos.com/4362315/7819/v/450/depositphotos_78194048-stock-illustration-medical-logo-health-care-center.jpg"
            alt="INS Logo"
          />
          <span className="text-white text-lg font-semibold ml-2">
            INS<span className="font-bold text-blue-500">Hospital</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white ">
          <li className="mr-3">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/doctors" className="hover:text-blue-400">
              Doctors
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Information */}
        <div className="flex items-center">
          <FaPhoneAlt className="text-white mr-2" />
          <p className="font-bold mr-2 text-red-500">+91 1234567890</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
