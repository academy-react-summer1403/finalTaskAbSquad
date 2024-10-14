import React from "react";
import { useNavigate } from "react-router-dom";
const MainBox = ({
  course,
  ImageContainer,
  Info,
  type = "courseList",
  showType = "Grid",
  style,
  tableImgConStyle = "",
  tableInfoStyle = "",
}) => {
  const navigate = useNavigate(); // Use Navigation
  return (
    <>
      <div
        onClick={() => {
          if (type == "courseList") {
            navigate("/CourseDetail/CourseId=" + course.courseId);
          } else {
<<<<<<< HEAD
            navigate("/News");
=======
            navigate("/NewsPageDetail/" + course.id);
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
          }
        }}
        className={`flex shadow-lg hover:shadow-2xl  dark:border dark:border-fontGray dark:hover:shadow-darkMainBoxShadow rounded-3xl  overflow-hidden bg-mainBoxGray dark:bg-primaryBlack ${style}`}
      >
        <ImageContainer
          course={course}
          type={type}
          tableImgConStyle={tableImgConStyle}
        />
        <Info
          course={course}
          type={type}
          showType={showType}
          shotableInfoStyle={tableInfoStyle}
        />
      </div>
    </>
  );
};

export default MainBox;
