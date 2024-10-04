import React from "react";
import StudentPanel from "./StudentPanel";
import SummerCourse from "./SummerCourse";
import AboutUs from "./AboutUs";
const QuickAccess = () => {
  return (
    <>
      <div className="grid grid-cols-1 my-20 gap-8 sm:flex sm:flex-row sm:h-[332px]">
        <StudentPanel />
        <SummerCourse />
        <AboutUs />
      </div>
    </>
  );
};

export default QuickAccess;
