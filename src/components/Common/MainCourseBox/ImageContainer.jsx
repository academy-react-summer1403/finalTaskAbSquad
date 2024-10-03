import React from "react";
import RoundedDiv from "./RoundedDiv";
const ImageContainer = ({ course }) => {
  return (
    <div className="flex flex-col justify-between basis-2/5 bg-[#FF9090] rounded-3xl">
      {/* Top Container */}
      <div className="flex flex-row gap-2 px-2 pt-2">
        <RoundedDiv text={course.typeName} />
        <RoundedDiv text={course.levelName} />
      </div>
      {/* Bottom Container */}
      <div className="text-xs rounded-xl text-instaRed bg-[#FFD1CB] w-max mr-3 mb-3 px-3 py-1 sm:text-sm">
        {course.statusName}
      </div>
    </div>
  );
};

export default ImageContainer;
