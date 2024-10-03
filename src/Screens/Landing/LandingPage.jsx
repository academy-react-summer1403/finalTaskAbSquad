import React, { useEffect, useState } from "react";
import Introduction from "../../components/Landing/Introduction";
import Button from "../../components/Common/Button/Button";
import QuickAccess from "../../components/Landing/QuickAccess";
import BlueStrap from "../../components/Landing/BlueStrap";
import Licences from "../../components/Landing/Licences";
import LandingMainTitle from "../../components/Common/LandingMainTitle";
import MainBox from "../../components/Common/MainCourseBox";
import { GetPopularCourses } from "../../core/Services/Api/course.api.js";
import CourseImgCon from "../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../components/Common/MainCourseBox/CourseInfo.jsx";
import http from "../../core/Services/Interceptor";
const LandingPage = () => {
  //Courses states for landing Popular Ones
  const [popularCourses, setPopularCourses] = useState([]);
  // Calling Courses for landing Popular Ones
  const GetPopularCourses = async () => {
    const res = await http.get("/Home/GetCoursesTop?Count=4");
    setPopularCourses(res);
  };
  useEffect(() => {
    GetPopularCourses();
  }, []);
  return (
    <div className="my-10">
      <Introduction />
      <Button
        text="شروع یادگیری"
        phoneStyle="py-2 m-auto mt-5 max-lg:text-base"
      />
      <QuickAccess />
      <BlueStrap />
      <Licences />
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="محبوب ترین دوره ها"
          desc="دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند"
        />
      </div>
      <div className="grid grid-cols-1 gap-8  sm:grid-cols-4">
        {popularCourses.map((it, index) => {
          return (
            <MainBox
              ImageContainer={CourseImgCon}
              Info={CourseInfo}
              key={index}
              course={it}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
