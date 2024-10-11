import React from "react";
import CourseStatus from "../../Common/MainCourseBox/CourseStatus";
import Title from "../../Common/MainCourseBox/Info/Title";
import RoundedDiv from "../../Common/MainCourseBox/Info/RoundedDiv";
import LittleRect from "../../Common/MainCourseLittleRect";
import { PiStudentBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import PriceTag from "../../Common/MainCourseBox/Info/PriceTag";
import Button from "../../Common/Button/Button";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import LikeDislikeCircle from "../../Common/LikeDislikeCircle";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const RightSide = () => {
  return (
    // Right Side Container
    <div className="xl:border xl:basis-2/5">
      {/* Gray Box */}
      <div className="grayBox flex flex-col gap-0 pr-5 py-3">
        <CourseStatus course={{ statusName: "mamad" }} style="mr-0" />
        <Title title={"ری اکت "} />
        <div className="flex flex-row items-center justify-start">
          <RoundedDiv text={"mamadi"} />
          <RoundedDiv text={"asghari"} />
        </div>
        <div className="flex flex-col gap-3 my-5">
          <LittleRect
            title={"80 دانشجو"}
            iconSize={"24px"}
            Icon={PiStudentBold}
          />
          <LittleRect title={"س"} Icon={CgCalendarDates} iconSize="24px" />
          <LittleRect title={"س"} Icon={CgCalendarDates} iconSize="24px" />
        </div>
        <PriceTag
          price={"1,800,000"}
          showType={"Grid"}
          priceSize="text-2xl sm:text-3xl"
        />
        <div className="flex flex-row gap-10">
          <Button text={"رزرو دوره"} phoneStyle={"h-14 basis-2/5 text-xl"} />
          <LikeDislikeCircle Icon={MdOutlineBookmarkAdd} iconSize={"24px"} />
          <LikeDislikeCircle Icon={AiOutlineLike} iconSize={"24px"} />
          <LikeDislikeCircle Icon={AiOutlineDislike} iconSize={"24px"} />
        </div>
      </div>
      {/* End OF Gray Box */}
    </div>
  );
};

export default RightSide;
