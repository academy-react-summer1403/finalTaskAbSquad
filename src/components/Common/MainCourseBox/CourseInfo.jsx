import React from "react";
import LittleRect from "../MainCourseLittleRect";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgCalendarDates } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
const Info = ({ course }) => {
  return (
    <>
      <div className="flex flex-col grow gap-4 pr-2 pl-4">
        {/* Title */}
        <div className="my-5">
          <h1 className="text-xl">ری‌اکت جی‌اس</h1>
        </div>
        {/* Description */}
        <h3 className="text-fontGray text-sm">
          آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های م...
        </h3>
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
        <div className="grow w-full"></div>
      </div>
    </>
  );
};

export default Info;
