import React from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Test from "../../components/AuthPage/Test";
import PhoneInput from "../../components/AuthPage/PhoneInput";
const Login = () => {
  return (
    <>
      <div className="flex">
        <RightSection
          Icon={FaHouse}
          desc="تماس بگیر"
          show={true}
          show2={true}
          Icon2={FaCocktail}
        />
        <LeftSection
          desc="لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را وارد کنید"
          title="خوش برگشتی!👋"
          text="ارسال کد تایید"
          RightData="حساب کاربری ندارید؟"
          LeftData="ایجاد به حساب کاربری"
          Main={PhoneInput}
          destination="/register"
        />
      </div>
    </>
  );
};

export default Login;
