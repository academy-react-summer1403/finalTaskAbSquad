import React from "react";
import LittleRect from "../../MainCourseLittleRect";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgCalendarDates } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";
import { RiQuillPenLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import PriceTag from "./PriceTag";
import LikeDisLike from "./LikeDisLike";
import Title from "./Title";
import Description from "./Description";
import Button from "../../Button/Button";
const Info = ({ course, type }) => {
  return (
    <>
      <div className="flex flex-col grow gap-4 pr-4 pl-4">
        {/* Title */}
        <Title />
        {/* Description */}
        <Description type="LandingNews" />
        {/* LittleRects */}
        {/* Landing Courses Only */}
        {type !== "LandingNews" && (
          <LittleRect
            title={course.teacherName}
            Icon={LiaChalkboardTeacherSolid}
            iconSize="25px"
          />
        )}

        {type !== "LandingNews" && (
          <LittleRect
            title="20 اردیبهشت 1403"
            Icon={CgCalendarDates}
            iconSize="25px"
          />
        )}
        {type !== "LandingNews" && (
          <LittleRect
            title={course.likeCount}
            Icon={PiStudentBold}
            iconSize="25px"
          />
        )}
        {/* ******************************* END OF LANDING COURSES */}
        {/* Landing News Only */}
        {type == "LandingNews" && (
          <LittleRect
            title={course.likeCount}
            Icon={RiQuillPenLine}
            iconSize="25px"
          />
        )}
        {type == "LandingNews" && (
          <LittleRect
            title={course.likeCount}
            Icon={IoEyeOutline}
            iconSize="25px"
          />
        )}
        {/* ******************************* END OF LANDING NEWS */}
        {/* Like And Price Div */}

        <div className="h-10 w-full flex flex-row justify-between items-center">
          {type !== "LandingNews" && <PriceTag />}
          <LikeDisLike />
          {type == "LandingNews" && (
            <Button text="بیشتر بخوانید" phoneStyle="text-sm" />
          )}
        </div>
      </div>
    </>
  );
};

export default Info;
