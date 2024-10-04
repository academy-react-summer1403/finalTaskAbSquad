import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import { FaCocktail } from "react-icons/fa";
import RightSecRow from "./RightSecRow";
const RightSection = () => {
  return (
    <div className="bg-primaryGray w-1/3 p-24 h-screen ">
      <div className=" flex flex-row justify-start items-center max-lg:grow mb-16">
        <BahrLogoComp />
      </div>
      <RightSecRow
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />{" "}
      <RightSecRow
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />{" "}
      <RightSecRow
        className="m-auto"
        desc="وارد کردن شماره همراه"
        Icon={FaCocktail}
      />
    </div>
  );
};

export default RightSection;
