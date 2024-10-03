import React from "react";
import LittleRect from "../../MainCourseLittleRect";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgCalendarDates } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";
import PriceTag from "./PriceTag";
import LikeDisLike from "./LikeDisLike";
import Title from "./Title";
import Description from "./Description";
const Info = ({ course }) => {
  return (
    <>
      <div className="flex flex-col grow gap-4 pr-4 pl-4">
        {/* Title */}
        <Title />
        {/* Description */}
        <Description />
        {/* LittleRects */}

        <LittleRect
          title={course.teacherName}
          Icon={LiaChalkboardTeacherSolid}
          iconSize="25px"
        />

        <LittleRect
          title="20 اردیبهشت 1403"
          Icon={CgCalendarDates}
          iconSize="25px"
        />
        <LittleRect
          title={course.likeCount}
          Icon={PiStudentBold}
          iconSize="25px"
        />
        {/* Like And Price Div */}
        <div className="grow w-full flex flex-row justify-between items-start">
          <PriceTag />
          <LikeDisLike />
        </div>
      </div>
    </>
  );
};

export default Info;
