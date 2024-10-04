import React from "react";

const RightSecRow = ({ desc, Icon }) => {
  return (
    <>
      <div className="flex mb-14">
        <div className="bg-primaryBlue rounded-full w-[72px] h-[72px] flex justify-center  items-center relative">
          {Icon && <Icon size="2em" />}
        </div>
        <div className="py-5 ps-3 font-IRANYekan text-primaryBlack text-2xl	font-bold">
          {desc}
        </div>
      </div>
    </>
  );
};

export default RightSecRow;
