import React from "react";

const LittleRect = ({ title, Icon, iconSize }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center text-sm sm:text-base">
        <Icon size={iconSize} />
        <span className="text-sm font-bold pr-3">{title}</span>
      </div>
    </>
  );
};

export default LittleRect;
