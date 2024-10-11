import React from "react";
import CourseDetailImage from "./CourseDetailImage";

const ImageContainer = ({ image }) => {
  return (
    <div className="w-full h-[428px] rounded-3xl overflow-hidden ">
      <CourseDetailImage image={image} />
    </div>
  );
};

export default ImageContainer;
