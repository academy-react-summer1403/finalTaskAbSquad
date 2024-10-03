import React from "react";

const PriceTag = ({ course }) => {
  return (
    <>
      <div className="basis-3/5">
        <span className="text-xl">1,800,000</span>
        <span className="text-primaryBlue text-sm pr-1">تومان</span>
      </div>
    </>
  );
};

export default PriceTag;
