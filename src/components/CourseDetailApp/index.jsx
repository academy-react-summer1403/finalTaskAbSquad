import React from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
const CourseDetailApp = () => {
  return (
    <>
      <div className="flex xl:flex-row xl:gap-16 h-screen">
        <RightSide />
        <LeftSide />
      </div>
    </>
  );
};

export default CourseDetailApp;
