import Button from "../Common/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
const LeftSection = ({
  text,
  descL,
  title,
  RightData,
  LeftData,
  Main,
  destination,
  setCurrentRightSecData,
}) => {
  const handleChange = () => {
    const updatedRightSecData = [
      { Icon: FaHouse, desc: "تمsadasdاس بگیر" },
      { desc: "تماس بsgasgasگیر", Icon: FaCocktail },
    ];
    console.log("Updating right section data:", updatedRightSecData);
    setCurrentRightSecData(updatedRightSecData);
  };

  return (
    <div className="flex justify-start flex-col items-center basis-2/3 mt-32">
      <h2 className="text-4xl -indent-14 mb-10">{title}</h2>
      <p className="text-xl w-[538px] mb-16">{descL}</p>
      <div className="mb-6">{Main && <Main />}</div>
      <Button
        phoneStyle="h-[56px] w-[538px]"
        text={text}
        onClick={handleChange}
      />
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
