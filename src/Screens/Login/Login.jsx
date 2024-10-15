import React from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { useState } from "react";
import Test from "../../components/AuthPage/Test";
import PhoneInput from "../../components/AuthPage/PhoneInput";
const Login = (desc, Icon) => {
  const initialRightSecData = [
    {
      Icon: FaHouse,
      desc: "تماس بگیر",
    },
    {
      desc: "تماس بsgasgasگیر",
      Icon: FaCocktail,
    },
  ];

  const [currentRightSecData, setCurrentRightSecData] =
    useState(initialRightSecData);

  console.log("Current Right Section Data:", currentRightSecData);

  return (
    <>
      <div className="flex">
        <RightSection
          rightSecData={currentRightSecData}
          desc={desc}
          Icon={Icon}
        />
        <LeftSection
          descL="لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود"
          title="به آکادمی بحر خوش اومدی!😍"
          text="ارسال کد تایید"
          RightData="حساب کاربری دارید؟"
          LeftData="ورود به حساب کاربری"
          Main={PhoneInput}
          destination="/register"
          setCurrentRightSecData={setCurrentRightSecData}
        />
      </div>
    </>
  );
};
export default Login;
