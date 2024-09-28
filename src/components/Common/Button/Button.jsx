import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className=" rounded-[64px] h-full px-6  flex  justify-center bg-primaryBlue text-primaryWhite leading-[48px]">
        {text}
      </button>
    </>
  );
};

export default Button;
