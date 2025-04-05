import React from "react";

const WrapperDiv = ({ children, reverse }) => {
  return (
    <div
      className={` space-y-4 md:space-y-0 md:flex  flex-col gap-4 p-4 ${
        reverse ? "md:flex-row-reverse" : "flex-row"
      }`}
    >
      {children}
    </div>
  );
};

export default WrapperDiv;
