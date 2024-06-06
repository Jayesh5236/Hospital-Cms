import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-4">Admin Panel</h4>
      <div className="space-y-2">
        <NavLink
          to="/dashboard/admin/create-patient"
          className="block py-2 px-4 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 w-36"
        >
          Create Patient
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-doctor"
          className="block py-2 px-4 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 w-36"
        >
          Create Doctor
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
