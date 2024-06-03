import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../Context/auth";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/user/login", userData);
      if (res && res.data.success) {
        toast.success("Login Successful");
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth-token", JSON.stringify({
          user: res.data.user,
          token: res.data.token,
        }));
        navigate(location.state?.from || "/");
      } else {
        toast.error("Failed to Login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error in Logging In");
    }
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-slate-300 to-slate-500">
      <div className="w-full max-w-sm p-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={onSubmitHandler}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Login to our platform
          </h5>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
              value={userData.email}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              value={userData.password}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
