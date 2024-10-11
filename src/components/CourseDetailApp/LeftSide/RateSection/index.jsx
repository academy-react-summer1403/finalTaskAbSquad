﻿import React from "react";
import RateStars from "./RateStars";
import { MdOutlineStars } from "react-icons/md";
const RateSection = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <MdOutlineStars size={"20px"} className="text-primaryBlue" />
      <span className="ml-3 mr-2">امتیاز دهید</span>
      <RateStars />
    </div>
  );
};

export default RateSection;