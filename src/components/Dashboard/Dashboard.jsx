import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Dashboard = ({ toggleSidebar }) => {
  return (
    <div
      className={`flex-1 hide-scrollbar transition-all max-h-screen overflow-y-scroll`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
