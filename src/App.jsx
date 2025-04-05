import { useState } from "react";

import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import MainBoard from "./components/Dashboard/Mainboard";
import Order from "./components/Order";
import Products from "./components/Products";
import Profile from "./components/Profile";
import SalesReport from "./components/SalesReport/SalesReport";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary1">
      <div className="container bg-primary1 flex mx-auto min-h-screen">
        <div
          className={`absolute top-0 transition-all duration-200 ${
            isOpen ? "left-[0%]" : "left-[-100%]"
          } md:static`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <Routes>
          <Route path="/" element={<MainBoard toggleSidebar={toggleSidebar} />}>
            <Route path="/" index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Products />} />
            <Route path="sales" element={<SalesReport />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="text-center flex flex-col items-center justify-center text-5xl  w-full">
                <span className="text-red-500 ">404!</span>
                <span className="text-white text-3xl">Page is not found</span>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
