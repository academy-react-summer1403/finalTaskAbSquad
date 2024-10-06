import React from "react";
import RoundedDiv from "./Info/RoundedDiv.jsx";
import CourseStatus from "./CourseStatus";
const ImageContainer = ({ course, type, tableImgConStyle }) => {
  return (
    <div
      className={`flex flex-col justify-between basis-2/5 bg-[#FF9090] rounded-3xl relative overflow-hidden ${tableImgConStyle}`}
    >
      {/* Top Container */}
      <div className="flex flex-row gap-2 px-2 pt-2 z-10">
        <RoundedDiv
          text={
            type == "LandingNews" ? course.newsCatregoryName : course.typeName
          }
        />
        <RoundedDiv
          text={
            type == "LandingNews" ? course.newsCatregoryName : course.levelName
          }
        />
      </div>
      {/* Bottom Container */}
      {type !== "LandingNews" && <CourseStatus course={course} />}
      <img
        className="absolute -top-2  left-9 w-[350px] scale-x-[1.3] "
        src={course.tumbImageAddress}
        alt="course Image"
      />
    </div>
  );
};

export default ImageContainer;
