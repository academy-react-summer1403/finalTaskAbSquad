import React from "react";
import FontGraySmallText from "../FontGraySmallText";

const ProfileComp = () => {
  return (
    <>
      <div className="border flex flex-row justify-start items-center gap-3 h-14">
        {/* Profile Container*/}
        <div className="h-14 w-14">
          <div className="border rounded-full bg-primaryGray w-full h-full">
            <img src="" alt="image" />
          </div>
        </div>
        {/* Names Container */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-xl ">محسن اسفتدیاری</div>
          <div>
            <FontGraySmallText text={"سنیور فرانت اند"} style="text-base" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComp;
