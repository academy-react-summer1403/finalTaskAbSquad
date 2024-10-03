import React from "react";
import RoundedDiv from "./Info/RoundedDiv.jsx";
import CourseStatus from "./CourseStatus";
const ImageContainer = ({ course, type }) => {
  return (
    <div className="flex flex-col justify-between basis-2/5 bg-[#FF9090] rounded-3xl">
      {/* Top Container */}
      <div className="flex flex-row gap-2 px-2 pt-2">
        <RoundedDiv text={course.typeName} />
        <RoundedDiv text={course.levelName} />
      </div>
      {/* Bottom Container */}
      {type !== "LandingNews" && <CourseStatus course={course} />}
    </div>
  );
};

export default ImageContainer;
