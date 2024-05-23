import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <ul className="flex flex-wrap justify-center space-x-6 text-white">
            <li className="mr-3">
              <Link to="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li className="mr-3">
              <Link to="/services" className="hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li className="mr-3">
              <Link to="/contact" className="hover:text-yellow-300">
                Contact Us
              </Link>
            </li>
            <li className="mr-3">
              <Link to="/faq" className="hover:text-yellow-300">
                FAQ
              </Link>
            </li>
            <li className="mr-3">
              <Link to="/blog" className="hover:text-yellow-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center mt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
