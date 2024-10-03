import React, { useEffect, useState } from "react";
import Introduction from "../../components/Landing/Introduction";
import Button from "../../components/Common/Button/Button";
import QuickAccess from "../../components/Landing/QuickAccess";
import BlueStrap from "../../components/Landing/BlueStrap";
import Licences from "../../components/Landing/Licences";
import LandingMainTitle from "../../components/Common/LandingMainTitle";
import MainBox from "../../components/Common/MainCourseBox";
import CourseImgCon from "../../components/Common/MainCourseBox/ImageContainer.jsx";
import CourseInfo from "../../components/Common/MainCourseBox/Info";
import http from "../../core/Services/Interceptor";
import TeacherSection from "../../components/Landing/TeacherSection/index.jsx";
// Start Of Landing Page
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
  // ********************************************************* RENDER *********************************************************
  return (
    <div className="my-10">
      <Introduction />
      <Button
        text="شروع یادگیری"
        phoneStyle="py-2 m-auto mt-5 text-base sm:text-lg"
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
              style={"cursor-pointer"}
            />
          );
        })}
      </div>
      {/* Best Teachers Title */}
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="برترین اساتید هفته"
          desc="اساتیدی که با نظرسنجی در دوره ها به انها بیشترین رای مثبت را دادند"
        />
      </div>
      {/* Best Teachers Section */}
      <div className="grid grid-cols-1  my-20 sm:flex gap-16 sm:flex-row sm:justify-center sm:items-center sm:gap-16">
        <TeacherSection rank="🥈" score="4.1" />
        <TeacherSection rank="🥇" score="4.2" />
        <TeacherSection rank="🥉" score="4.0" />
      </div>
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
    </div>
  );
};

export default LandingPage;
