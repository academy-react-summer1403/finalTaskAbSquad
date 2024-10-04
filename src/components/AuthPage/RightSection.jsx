import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import { FaHouse } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";
const FirstComponent = ({ desc, Icon }) => (
  <>
    <div className="flex mb-14">
      <div className="bg-primaryBlue rounded-full w-[72px] h-[72px] flex justify-center  items-center relative">
        {Icon && <Icon size="2em" />}
      </div>
      <div className="py-5 ps-3 font-IRANYekan text-primaryBlack text-2xl	font-bold">
        {desc}
      </div>
    </div>
  </>
);
const RightSection = () => {
  return (
    <div className="bg-primaryGray w-1/3 p-24 h-screen ">
      <div className=" flex flex-row justify-start items-center max-lg:grow mb-16">
        <BahrLogoComp />
      </div>
      <FirstComponent
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />{" "}
      <FirstComponent
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />{" "}
      <FirstComponent
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />
    </div>
  );
};

export default RightSection;
