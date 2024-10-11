import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";

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
}) => {
  return (
    <div className="flex justify-start flex-col items-center basis-2/3 mt-32">
      <h2 className="text-4xl -indent-14 mb-10">{title}</h2>
      <p className="text-xl w-[538px] mb-16">{descL}</p>
      <div className="mb-6">{Main && <Main />}</div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6">
        {step === 1 && (
          <Button
            phoneStyle="h-[56px] w-[120px]"
            text={textB}
            onClick={handleBack}
            disabled={disableBack}
          />
        )}
        <Button
          phoneStyle="h-[56px] w-[120px]"
          text={textN}
          onClick={handleNext}
          disabled={disableNext}
        />
      </div>

      <div className="mt-6">
        <span>{RightData}</span>
        <NavLink to={destination}>
          <span className="underline font-IRANYekan font-bold cursor-pointer">
            {LeftData}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSection;
