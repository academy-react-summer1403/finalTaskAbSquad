import React from "react";
import LandingMainTitle from "../../Common/LandingMainTitle";
import MainBox from "../../Common/MainCourseBox";
import CourseImgCon from "../../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../../components/Common/MainCourseBox/Info";
const ArticlesSection = ({ popularCourses }) => {
  return (
    <>
      {/* New And Articles Title */}
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="اخبار و مقالات هفته"
          desc="خبر ها و مقاله هایی که در این هفته منتشر شدند"
        />
      </div>
      {/* News Components */}
      <div className="grid grid-cols-1 gap-8  sm:grid-cols-4">
        {popularCourses.map((it, index) => {
          return (
            <MainBox
              ImageContainer={CourseImgCon}
              Info={CourseInfo}
              key={index}
              course={it}
              type="LandingNews"
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticlesSection;
