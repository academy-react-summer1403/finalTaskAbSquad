import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
const LeftSection = ({
  text,
  desc,
  title,
  RightData,
  LeftData,
  Main,
  destination,
}) => {
  return (
    <div className="flex justify-start flex-col items-center basis-2/3 mt-32">
      <h2 className="text-4xl -indent-14 mb-10">{title}</h2>
      <p className="text-xl w-[538px] mb-16">{desc}</p>
      <div className="mb-6">{Main && <Main />}</div>
      <Button phoneStyle="h-[56px] w-[538px]" text={text} />
      <div className="mt-6">
        <span>{RightData}</span>
        <NavLink to={destination}>
          <span className="underline font-IRANYekan font-bold	cursor-pointer">
            {LeftData}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSection;
