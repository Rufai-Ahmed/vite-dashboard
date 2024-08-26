import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex items-center">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
