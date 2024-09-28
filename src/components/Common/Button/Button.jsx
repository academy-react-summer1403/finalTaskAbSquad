import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className=" rounded-[64px] h-full px-6  flex items-center justify-center bg-primaryBlue text-primaryWhite ">
        {text}
      </button>
    </>
  );
};

export default Button;
