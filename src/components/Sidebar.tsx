import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-4 text-2xl font-bold">Dashboard</div>
      <nav className="mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-4 text-gray-600 hover:bg-gray-200 ${
              isActive ? "bg-gray-200 text-gray-900" : ""
            }`
          }
        >
          <FaHome className="mr-3" />
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center p-4 text-gray-600 hover:bg-gray-200 ${
              isActive ? "bg-gray-200 text-gray-900" : ""
            }`
          }
        >
          <FaUser className="mr-3" />
          Users
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-4 text-gray-600 hover:bg-gray-200 ${
              isActive ? "bg-gray-200 text-gray-900" : ""
            }`
          }
        >
          <FaCog className="mr-3" />
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
