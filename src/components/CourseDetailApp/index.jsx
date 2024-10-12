import React, { useEffect, useState } from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { useParams } from "react-router-dom";
import { GetCourseDetail } from "../../core/Services/Api/CourseDetail/course.detail.api";
const CourseDetailApp = () => {
  const { CourseId } = useParams();
  const [courseDetail, setCourseDetail] = useState({});

  const fecthDetail = async () => {
    const res = await GetCourseDetail(CourseId);
    setCourseDetail(res);
  };
  useEffect(() => {
    fecthDetail();
  }, []);

  return (
    <>
      <div className="flex xl:flex-row xl:gap-16 my-10">
        <RightSide courseDetail={courseDetail} />
        <LeftSide courseDetail={courseDetail} />
        {/* Other Courses */}
      </div>
      <div className="">
        <h1 className="text-[48px]">دوره های دیگر</h1>
      </div>
      <div className="w-full"></div>
    </>
  );
};

export default CourseDetailApp;
