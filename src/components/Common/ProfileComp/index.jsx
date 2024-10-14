import React from "react";
import FontGraySmallText from "../FontGraySmallText";

<<<<<<< HEAD
const ProfileComp = ({ name, skill, style }) => {
  return (
    <>
      <div
        className={`flex flex-row justify-start items-center gap-3 h-14 ${style}`}
=======
const ProfileComp = ({ name, skill, style, reply }) => {
  return (
    <>
      <div
        className={`flex flex-row justify-start items-center gap-3 h-14 ${style} ${
          reply == "yes" ? "max-sm:right-[1%]" : ""
        }`}
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
      >
        {/* Profile Container*/}
        <div className="h-14 w-14">
          <div className="border rounded-full bg-primaryGray w-full h-full">
            <img src="" alt="" />
          </div>
        </div>
        {/* Names Container */}
        <div className="flex flex-col justify-start items-start">
<<<<<<< HEAD
          <div className="text-xl ">{name}</div>
          <div>
            <FontGraySmallText text={skill} style="text-base" />
=======
          <div className="sm:text-xl text-base ">{name}</div>
          <div>
            <FontGraySmallText text={skill} />
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
