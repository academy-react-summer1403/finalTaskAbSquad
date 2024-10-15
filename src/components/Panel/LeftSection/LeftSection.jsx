import React from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";

const LeftSection = () => {
  return (
    <div>
      <div className="bg-primaryWhite flex flex-row gap-2 w-[1096px] h-[80px] py-3 rounded-2xl">
        <div className="rounded-full border border-primaryGray w-[56px] h-[56px] text-3xl flex flex-row-reverse items-center justify-center bg-red-500">
          pic
          <div className="rounded-full border border-primaryGray w-[16px] h-[16px] text-3xl flex items-center justify-start self-end bg-red-500">
            e
          </div>
        </div>
        <div className="flex flex-col mt-2 ">
          <span>پارسا آقایی </span>
          <span className="text-xs text-primaryBlue">ادمین ، دانشجو</span>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full border border-primaryGray w-[56px] h-[56px] text-3xl flex items-center justify-center">
            <PiBell />
          </div>
          <div className="rounded-full border border-primaryGray w-[56px] h-[56px] text-3xl flex items-center justify-center">
            <HiOutlineMoon />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftSection;
