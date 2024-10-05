import React from "react";
import TextAboveCourse from "./TextAboveCourse";
import CourseSection from "./CourseSection";

const ShowCourseSection = () => {
  return (
    <>
      <div className="h-screen">
        <TextAboveCourse />
        <CourseSection />
      </div>
    </>
  );
};

export default ShowCourseSection;
