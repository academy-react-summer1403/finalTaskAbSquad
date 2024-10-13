import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ArrowLeftComp = ({ style }) => {
  return (
    <span className={`flex items-center text-xl ${style} `}>
      ------------------
      <MdKeyboardArrowLeft className="relative left-[7px] top-[1px]" />
    </span>
  );
};

export default ArrowLeftComp;
