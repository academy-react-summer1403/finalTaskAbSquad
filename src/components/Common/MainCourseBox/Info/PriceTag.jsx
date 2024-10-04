import React from "react";
const PriceTag = ({ price }) => {
  return (
    <>
      <div className="basis-8/12 dark:text-primaryWhite">
        <span className="text-xl sm:text-2xl">{price.toLocaleString()}</span>
        <span className="text-primaryBlue text-sm pr-1 sm:text-base">
          تومان
        </span>
      </div>
    </>
  );
};

export default PriceTag;
