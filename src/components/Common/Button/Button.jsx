import React from "react";

const Button = ({ text, phoneStyle }) => {
  return (
    <>
      <button
        className={`rounded-[64px] px-6  flex items-center justify-center bg-primaryBlue   text-primaryWhite text-nowrap hover:shadow-buttonShadow  dark:hover:shadow-darkButtonShadow ${phoneStyle}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
