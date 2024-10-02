import React from "react";
import Button from "../Button/Button";

const RoundedDiv = ({ text }) => {
  return (
    <>
      <div className="text-xs bg-primaryBlue rounded-blueButton py-[6px] px-3 text-primaryWhite sm:text-sm">
        {text}
      </div>
    </>
  );
};

export default RoundedDiv;
