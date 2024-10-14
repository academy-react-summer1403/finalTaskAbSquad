import React from "react";
<<<<<<< HEAD
const PriceTag = ({ price, showType, priceSize = "" }) => {
  return (
    <>
      <div
        className={`basis-8/12 dark:text-primaryWhite ${
          showType !== "Grid" ? " order-2 text-left pl-2 pb-2" : " order-0"
        }`}
      >
        <span className={`${priceSize}`}>{price}</span>
=======
const PriceTag = ({ price, showType, priceSize = "", style = "" }) => {
  return (
    <>
      <div
        className={`basis-8/12 dark:text-primaryWhite order ${style} ${
          showType !== "Grid" ? " order-2 text-left pl-2 pb-2" : " order-1"
        }`}
      >
        <span className={`${priceSize}`}>{price.toLocaleString()}</span>
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
        <span className="text-primaryBlue text-sm pr-1 sm:text-base">
          تومان
        </span>
      </div>
    </>
  );
};

export default PriceTag;
