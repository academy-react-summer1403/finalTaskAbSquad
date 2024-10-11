import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import ProfileComp from "../../Common/ProfileComp";
import FontGraySmallText from "../../Common/FontGraySmallText";
import TeacherProfSection from "./TeacherProfSection";

const LeftSide = ({ courseDetail }) => {
  return (
    <>
      <div className="grow flex flex-col items-start justify-start gap-10">
        <ImageContainer courseDetail={courseDetail} />
        <div className="flex flex-col gap-3 w-full ">
          <FontGraySmallText text="مدرس" style="" />
          <TeacherProfSection courseDetail={courseDetail} />
        </div>

        <FontGraySmallText text="توضیحات" style="" />
      </div>
    </>
  );
};

export default LeftSide;
