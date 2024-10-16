import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useSelector } from " react-redux";
const DarkModeButton = () => {
  return (
    <>
      <span
        onClick={() => {
          if (darkMode == "on") {
            setDarkMode("off");
          } else if (darkMode == "off") {
            setDarkMode("on");
          }
        }}
        className="border border-solid border-primaryGray w-[56px] h-full rounded-full flex justify-center items-center  cursor-pointer pl-1 pb-[1px] max-lg:ml-4"
      >
        <IoMoonOutline size="25px" />
      </span>
    </>
  );
};

export default DarkModeButton;
