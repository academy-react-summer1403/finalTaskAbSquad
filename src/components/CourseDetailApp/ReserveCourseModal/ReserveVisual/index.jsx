import React from "react";
import ArrowLeftComp from "./ArrowLeftComp";
import { PiUserCircleDashed } from "react-icons/pi";
import { AiOutlineProfile } from "react-icons/ai";
const ReserveVisual = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center w-full gap-2">
        <ArrowLeftComp style={"relative  bottom-3"} />
        <div className="flex flex-col justify-center items-center">
          <div className="bg-primaryBlue p-[28px] rounded-full">
            <PiUserCircleDashed size="48px" className="text-primaryWhite" />
          </div>
          <span className="text-xl">رزرو من</span>
        </div>
        <ArrowLeftComp style={"relative  bottom-3"} />

        <div className="flex flex-col justify-center items-center">
          <div className="border-[5px] border-primaryGray p-[28px] rounded-full">
            <AiOutlineProfile size="48px" className="text-primaryBlack" />
          </div>
          <span className="text-xl">دوره من</span>
        </div>
      </div>
    </>
  );
};

export default ReserveVisual;
