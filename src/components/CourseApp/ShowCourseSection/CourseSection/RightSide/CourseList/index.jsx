import React, { useEffect, useState } from "react";
import { GetCourseList } from "../../../../../../core/Services/Api/CoursePage/course.pagination.api";
import MainBox from "../../../../../Common/MainCourseBox";
import CourseImgCon from "../../../../../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../../../../components/Common/MainCourseBox/Info";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const CourseList = ({ showType }) => {
  const [courseList, setCourseList] = useState([]);
  // Number Of Pages
  const [totalCourses, setTotalCourses] = useState("");
  // Use search Params
  const [searchParams, setSearchParams] = useSearchParams();
  //   Function For Fetching The Pagination API
  const fetchCoursePagination = async () => {
    const result = await GetCourseList();
    // passing it for the future calculations for page number
    setTotalCourses(result.totalCount);
    // passing the courses API
    setCourseList(result.courseFilterDtos);
  };
  const handlePagination = (info) => {
    const page = info + 1;
    setSearchParams((op) => {
      op.set("PageNumber", page);
      return op;
    });
  };
  const setCourseParameters = () => {};
  // Use Effect For Fecthing the course api
  useEffect(() => {
    fetchCoursePagination();
  }, []);

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
      <ReactPaginate
        containerClassName="flex flex-row-reverse bg-primaryGray h-[48px] justify-between items-center rounded-2xl absolute -bottom-16 overflow-hidden"
        pageLinkClassName="hover:bg-primaryBlue flex justify-center items-center rounded-lg block w-[48px] h-full"
        pageClassName="h-full"
        breakLabel="..."
        nextLabel={<SlArrowRight />}
        previousLabel={<SlArrowLeft />}
        pageCount={10}
        pageRangeDisplayed={1}
        activeLinkClassName="bg-primaryBlue"
        nextLinkClassName={
          "flex justify-center items-center block w-[48px] active:bg-primaryBlue h-full"
        }
        nextClassName="h-full"
        previousClassName="h-full"
        previousLinkClassName={
          "flex justify-center items-center block w-[48px] active:bg-primaryBlue h-full"
        }
        onClick={(e) => {
          handlePagination(e.nextSelectedPage);
        }}
      />
    </div>
  );
};

export default CourseList;
