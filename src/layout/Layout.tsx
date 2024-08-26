import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />

      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
