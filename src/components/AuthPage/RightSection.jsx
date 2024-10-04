import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import { FaCocktail } from "react-icons/fa";
import RightSecRow from "./RightSecRow";
const RightSection = ({
  Icon,
  desc,
  Icon2 = "",
  desc2 = "",
  Icon3 = "",
  desc3 = "",
  show,
  show2 = {},
  show3 = {},
}) => {
  return (
    <div className="bg-primaryGray w-1/3 p-24 h-screen ">
      <div className=" flex flex-row justify-start items-center max-lg:grow mb-16">
        <BahrLogoComp />
      </div>
      {show && <RightSecRow className="m-auto" desc={desc} Icon={Icon} />}
      {show2 && <RightSecRow className="m-auto" desc={desc2} Icon={Icon2} />}
      {show3 && <RightSecRow className="m-auto" desc={desc3} Icon={Icon3} />}
    </div>
  );
};

export default RightSection;
