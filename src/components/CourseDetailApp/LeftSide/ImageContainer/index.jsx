import React from "react";
import CourseDetailImage from "./CourseDetailImage";

const ImageContainer = ({ courseDetail }) => {
  return (
    <div className="w-full h-[428px] rounded-3xl">
      <CourseDetailImage image={courseDetail.imageAddress} />
    </div>
  );
};

export default ImageContainer;
