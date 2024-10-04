import React from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
const Register = () => {
  return (
    <div className="flex">
      <RightSection
        Icon={FaHouse}
        desc="تماس بگیر"
        show={true}
        show2={true}
        Icon2={FaCocktail}
      />
      <LeftSection />
    </div>
  );
};

export default Register;
