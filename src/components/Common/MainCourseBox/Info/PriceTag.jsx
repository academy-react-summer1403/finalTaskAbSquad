import React from "react";
const PriceTag = ({ course }) => {
  return (
    <>
      <div className="basis-8/12">
        <span className="text-xl sm:text-2xl">1,800,000</span>
        <span className="text-primaryBlue text-sm pr-1 sm:text-base">
          تومان
        </span>
      </div>
    </>
  );
};

export default PriceTag;
