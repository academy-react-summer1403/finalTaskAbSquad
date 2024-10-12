﻿import React from "react";
const PriceTag = ({ price, showType, priceSize = "" }) => {
  return (
    <>
      <div
        className={`basis-8/12 dark:text-primaryWhite ${
          showType !== "Grid" ? " order-2 text-left pl-2 pb-2" : " order-0"
        }`}
      >
        <span className={`${priceSize}`}>{price.toLocaleString()}</span>
        <span className="text-primaryBlue text-sm pr-1 sm:text-base">
          تومان
        </span>
      </div>
    </>
  );
};

export default PriceTag;
