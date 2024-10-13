import React from "react";
import BahrLogoComp from "../Common/BahrLogoComp";
import RightSecRow from "./RightSecRow";

const RightSection = ({ rightSecData }) => {
  return (
    <div className="bg-primaryGray w-1/3 p-24 h-screen text-primaryWhite">
      <div className="flex flex-row justify-start items-center max-lg:grow mb-16">
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
