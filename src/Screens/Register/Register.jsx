import React from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Test from "../../components/AuthPage/Test";
import PhoneInput from "../../components/AuthPage/PhoneInput";
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
      <LeftSection
        desc="لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود"
        title="به آکادمی بحر خوش اومدی!😍"
        text="ارسال کد تایید"
        RightData="حساب کاربری دارید؟"
        LeftData="ورود به حساب کاربری"
        Main={PhoneInput}
        destination="/login"
      />
    </div>
  );
};

export default Register;
