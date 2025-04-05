import React from "react";

const ContentHeader = ({ title, des }) => {
  return (
    <div className="mb-2">
      {title && (
        <h1 className="text-[15px] md:text-[20px] md:font-bold text-white/80 font-semibold">
          {title}
        </h1>
      )}
      {des && (
        <p className="text-[10px] md:text-[12px] font-semibold mt-1 text-grayText">
          {des}
        </p>
      )}
    </div>
  );
};

export default ContentHeader;
