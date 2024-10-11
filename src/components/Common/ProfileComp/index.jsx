import React from "react";
import FontGraySmallText from "../FontGraySmallText";

const ProfileComp = ({ name, skill }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center gap-3 h-14">
        {/* Profile Container*/}
        <div className="h-14 w-14">
          <div className="border rounded-full bg-primaryGray w-full h-full">
            <img src="" alt="" />
          </div>
        </div>
        {/* Names Container */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-xl ">{name}</div>
          <div>
            <FontGraySmallText text={skill} style="text-base" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
