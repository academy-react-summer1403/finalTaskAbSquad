import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import RightSecRow from "./RightSecRow";

const RightSection = ({ rightSecData }) => {
  return (
    <div className="md:bg-primaryGray md:w-1/3 md:p-24 md:h-screen text-primaryWhite max-md:w-full max-md:p-4 max-md:h-auto">
      <div className="flex flex-row justify-start items-center max-md:hidden mb-16 ">
        <BahrLogoComp />
      </div>
      {rightSecData.map((item, index) => (
        <RightSecRow
          key={`${item.desc}-${index}`}
          desc={item.desc}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};

export default RightSection;
//tesssssssssst
