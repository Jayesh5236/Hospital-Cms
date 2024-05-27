import React, { useState } from "react";
import { Input } from "antd";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-teal-400 to-yellow-200">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex-shrink-0">
            {/* Logo */}
            <img
              src="https://img.freepik.com/free-vector/flat-medical-symbol_23-2149496593.jpg?w=740&t=st=1716817600~exp=1716818200~hmac=a426521adae02dd354dbb17c83870720037304dfd500488ada004f26e6b64292"
              alt="Logo"
              className="w-30 h-10"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center">
            <Input placeholder="Search Here" className="mt-2 mr-3 w-48" />
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center text-xl font-serif">
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li className="bg-gradient-to-r from-rose-400 to-red-500 rounded h-7 w-16 text-center flex items-center justify-center">
                Login
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button onClick={toggleCollapsed} className="text-black focus:outline-none">
              {isOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center text-xl font-serif space-y-2 p-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li className="bg-gradient-to-r from-rose-400 to-red-500 rounded h-7 w-16 text-center flex items-center justify-center">
                Login
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
