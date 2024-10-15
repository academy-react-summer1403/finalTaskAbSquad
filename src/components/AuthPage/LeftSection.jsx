import { div } from "framer-motion/client"; //?????
import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";
import Timer from "./Timer";
import BahrLogoComp from "../Common/BahrLogoComp";
import { PiShieldStarBold } from "react-icons/pi";
import { useState } from "react";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
const LeftSection = ({
  textB,
  textN,
  descL,
  title,
  RightData,
  LeftData,
  Main,
  destination,
  handleNext,
  handleBack,
  disableNext,
  disableBack,
  step,
  titleF,
}) => {
  // const [loginData, setLoginData] = useState({
  //   PhoneOrGmail: "",
  //   Password: "",
  // });

  // const handleFormData = (PhoneOrGmail, Password) => {
  //   setLoginData({ PhoneOrGmail, Password });
  //   console.log("Received from child:", PhoneOrGmail, Password);
  // };
  // const OnClick = async (event) => {
  //   event.preventDefault();
  //   const user = { PhoneOrGmail, Password, rememberMe: true };

  //   const res = await axios.post(
  //     "https://classapi.sepehracademy.ir/api/Sign/Login",
  //     user
  //   );

  //   const token = res.data.token;
  //   console.log(token);
  //   localStorage.setItem("token", token);
  //   dispatch(handleToken(token));
  // };
  return (
    <div className="flex justify-start flex-col items-center basis-2/3 mt-32">
      <h2 className="text-4xl -indent-14 mb-10">{title}</h2>
      <p className="text-xl w-[538px] mb-16">{descL}</p>
      <div className="mb-6">{Main && <Main titleF={titleF} />}</div>

      <Button
        phoneStyle="h-[56px] w-[538px]"
        text={textN}
        onClick={handleNext}
        disabled={disableNext}
      />

      {step === 0 && (
        <div className="mt-6">
          <span>{RightData}</span>
          <NavLink to={destination}>
            <span className="underline font-IRANYekan font-bold cursor-pointer">
              {LeftData}
            </span>
          </NavLink>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-row-reverse gap-24 mt-6">
          <Button
            phoneStyle="!text-primaryBlue h-[40px] w-[220px] bg-LightBlueCustom "
            text={textB}
            onClick={handleBack}
            disabled={disableBack}
          />
          <Timer />
        </div>
      )}
    </div>
  );
};

export default LeftSection;
