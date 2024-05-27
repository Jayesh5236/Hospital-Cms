import React from "react";
import { Input } from "antd";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex w-full bg-gradient-to-r from-teal-400 to-yellow-200 mx-auto">
          <div className="flex-1">
            {/* Logo */}
            <img
              src="https://img.freepik.com/free-vector/flat-medical-symbol_23-2149496593.jpg?w=740&t=st=1716817600~exp=1716818200~hmac=a426521adae02dd354dbb17c83870720037304dfd500488ada004f26e6b64292"
              alt="Logo"
              className="w-30 h-10 m-1"
            />
          </div>
          <div className="flex-1 justify-center items-center ">
            <Input placeholder="Search Here" className="mt-2 mr-3 w-48" />
          </div>

          <div className="flex-2">
            <ul className="flex justify-end items-center text-xl font-serif">
              <li className="m-2">Home</li>
              <li className="m-2">About</li>
              <li className="m-2">Services</li>
              <li className="m-2">Contact</li>
              <li className="m-2 bg-gradient-to-r from-rose-400 to-red-500 rounded h-7 w-16  text-center">
                Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
