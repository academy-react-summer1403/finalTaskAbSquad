import React, { useEffect, useState } from "react";
import { GetCourseList } from "../../../../../../core/Services/Api/CoursePage/course.pagination.api";
import MainBox from "../../../../../Common/MainCourseBox";
import CourseImgCon from "../../../../../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../../../../components/Common/MainCourseBox/Info";
import PaginationButtons from "./PaginationButtons";
const CourseList = ({ setShowType, showType }) => {
  const [courseList, setCourseList] = useState([]);
  //   Function For Fetching The Pagination API
  const fetchCoursePagination = async () => {
    const result = await GetCourseList();
    setCourseList(result);
  };
  // Use Effect For Fecthing the course api
  useEffect(() => {
    fetchCoursePagination();
  }, []);
  // For the time when the page navigator is pressed
  useEffect(() => {}, []);

  return (
    <div
      className={` grid  gap-6 basis-full w-full my-8 mb-20 relative ${
        showType == "Grid" ? "lg:grid-cols-3" : "lg:grid-col-1"
      } `}
    >
      {courseList.map((it, index) => {
        return (
          ((index < 9 && showType == "Grid") ||
            (index < 8 && showType == "Table")) && (
            <MainBox
              key={index}
              ImageContainer={CourseImgCon}
              Info={CourseInfo}
              type="courseList"
              course={it}
              style={`cursor-pointer ${
                showType == "Grid" ? "flex-col h-[528px]" : "flex-row h-[288px]"
              }`}
            />
          )
        );
      })}
      <PaginationButtons courseList={courseList} />
    </div>
  );
};

export default CourseList;
