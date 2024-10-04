import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import { FaHouse } from "react-icons/fa6";
const FirstComponent = ({ desc, className = "" }) => (
  <div className={className}>
    <h2 className="text-xl font-bold">First Component</h2>
    <p>{desc}</p>
  </div>
);
const RightSection = () => {
  return (
    <>
      <FaHouse />
      <BahrLogoComp />
      <FirstComponent desc="hi this is me" />
    </>
  );
};

export default RightSection;
