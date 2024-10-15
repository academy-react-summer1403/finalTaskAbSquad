import { div } from "framer-motion/client"; //?????
import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";
import Timer from "./Timer";
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
  return (
    <div className="flex md:justify-start flex-col items-center md:basis-2/3 md:mt-20 max-md:items-center max-md:p-6 max-md:w-full">
      <div className="flex flex-row justify-start items-start self-start md:hidden mb-16 ">
        <BahrLogoComp />
      </div>
      <h2 className="md:text-4xl md:-indent-14 md:mb-10 text-2xl text-center">
        {title}
      </h2>
      <p className="text-xs md:text-xl md:w-[538px] mb-8 w-[270px] ">{descL}</p>
      <div className="mb-6 max-md:w-full">
        {Main && <Main titleF={titleF} />}
      </div>
      {stepLogin === 0 && (
        <div className=" md:w-[540px] mb-6 max-md:flex-row-reverse max-md:flex max-md:gap-8">
          <NavLink to="/ForgotPass">
            <Button
              phoneStyle="!text-primaryBlue h-[40px] w-[220px] !bg-LightBlueCustom gap-4 float-left max-md:w-[160px] max-md:text-xs "
              text={textB}
              onClick={handleBack}
              disabled={disableBack}
              Icon={PiShieldStarBold}
            />
          </NavLink>
          <div>
            <input
              className="justify-self-start float-start rounded-lg 
              appearance-none w-[24px] h-[24px] bg-primaryGray checked:bg-primaryBlue checked:border-transparent focus:outline-none
              
                "
              type="checkbox"
            />
            <span className=" float-start indent-1.5">مرا به خاطر بسپار </span>
          </div>
        </div>
      )}
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
