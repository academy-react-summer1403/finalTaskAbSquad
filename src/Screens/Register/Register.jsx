import React, { useState } from "react";
import RightSection from "../../components/AuthPage/RightSection";
import LeftSection from "../../components/AuthPage/LeftSection";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import PhoneInput from "../../components/AuthPage/PhoneInput";

const stepperData = [
  {
    left: {
      step: 0,
      title: "به آکادمی بحر خوش اومدی!😍",
      descL:
        "لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید ارسال شود",
      text: "ارسال کد تایید",
      RightData: "حساب کاربری دارید؟",
      textN: "ثبت اطلاعات",
      textB: "dhds اطلاعات",
      LeftData: "ورود به حساب کاربری",
      Main: PhoneInput,
      destination: "/login",
    },
    right: [
      { Icon: FaHouse, desc: "وارد کردن شماره همراه" },
      { Icon: FaCocktail, desc: "تایید کد ارسال شده به شماره همراه" },
      { Icon: FaCocktail, desc: "وارد کردن اطلاعات حساب کاربری" },
    ],
  },
  {
    left: {
      step: 1,
      title: "به آکادمی بحر خوش اومدی!😍",
      descL: "لطفا کد ارسال شده به شماره ؟؟؟؟؟؟؟؟09 وارد کنید",
      textN: "ثبت اطلاعات",
      textB: "dhds اطلاعات",
      text: "تایید",
      RightData: "حساب کاربری دارید؟",
      LeftData: "ورود به حساب کاربری",
      Main: PhoneInput,
      destination: "/login",
    },
    right: [
      { Icon: FaHouse, desc: "وارد کردن شماره همراه" },
      { Icon: FaCocktail, desc: "تایید کد ارسال شده به شماره همراه" },
      { Icon: FaCocktail, desc: "وارد کردن اطلاعات حساب کاربری" },
    ],
  },
  {
    left: {
      step: 2,
      title: "به آکادمی بحر خوش اومدی!😍",
      descL: "لطفا اطلاعات شخصی حساب کاربری خود را وارد کنید ",
      textN: "ثبت اطلاعات",
      textB: "dhds اطلاعات",
      RightData: "حساب کاربری دارید؟",
      LeftData: "ورود به حساب کاربری",
      Main: PhoneInput,
      destination: "/login",
    },
    right: [
      { Icon: FaHouse, desc: "وارد کردن شماره همراه" },
      { Icon: FaCocktail, desc: "تایید کد ارسال شده به شماره همراه" },
      { Icon: FaCocktail, desc: "وارد کردن اطلاعات حساب کاربری" },
    ],
  },
];

const Register = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < stepperData.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <div className="flex">
      <RightSection rightSecData={stepperData[step].right} />
      <LeftSection
        step={stepperData[step].left.step}
        title={stepperData[step].left.title}
        descL={stepperData[step].left.descL}
        textN={stepperData[step].left.textN}
        textB={stepperData[step].left.textB}
        RightData={stepperData[step].left.RightData}
        LeftData={stepperData[step].left.LeftData}
        Main={stepperData[step].left.Main}
        destination={stepperData[step].left.destination}
        setCurrentRightSecData={() => {}}
        handleNext={handleNext}
        handleBack={handleBack}
        disableNext={step === stepperData.length - 1}
        disableBack={step === 0}
      />
    </div>
  );
};

export default Register;
