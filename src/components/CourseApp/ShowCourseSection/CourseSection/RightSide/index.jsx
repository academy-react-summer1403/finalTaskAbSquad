﻿import React, { useState } from "react";
import SortAndGrid from "./SortAndGrid";
import CourseList from "./CourseList";
const RightSide = () => {
  // For Passing Between Sort And Grid State
  const [showType, setShowType] = useState("Grid");
  return (
    <>
      <div className="flex flex-col justify-start items-center basis-3/4  h-full">
        <SortAndGrid showType={showType} setShowType={setShowType} />
        <CourseList showType={showType} />
      </div>
    </>
  );
};

export default RightSide;
