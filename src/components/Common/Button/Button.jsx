import React from "react";

const Button = ({ text, phoneStyle }) => {
  return (
    <>
      <button
        className={`sm:text-xl rounded-[64px] h-full px-6  flex items-center justify-center bg-primaryBlue   text-primaryWhite text-nowrap ${phoneStyle}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
