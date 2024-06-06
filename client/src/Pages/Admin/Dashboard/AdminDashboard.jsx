import React from "react";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../../../Context/auth";

const AdminDashboard = () => {
  const { auth } = useAuth();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/4">
        <AdminMenu/>
      </div>
      <div className="lg:w-3/4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome, {auth?.user.name}
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-gray-600 font-semibold">Email:</span>{" "}
              <span>{auth?.user.email}</span>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Phone:</span>{" "}
              <span>{auth?.user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
