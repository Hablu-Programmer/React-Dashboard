import React from "react";
import Earnings from "./Earnings";
import TodaySales from "./TodaySales";
import TopProducts from "./TopProducts";

const MainBoard = () => {
  return (
    <div className="mt-5">
      <TodaySales />
      <TopProducts />
      <Earnings />
    </div>
  );
};

export default MainBoard;
