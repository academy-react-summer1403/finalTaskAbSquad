import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Licences from "../../components/Landing/Licences";
import PopularCoursesSection from "./PopularCoursesSection";
import TeacherSection from "./TeacherSection";
import ArticlesSection from "./ArticlesSection";
import { GetPopularCourse } from "../../core/Services/Api/course.api.js";
const LandingApp = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const GetCourse = async () => {
    const res = await GetPopularCourse();
    setPopularCourses(res);
  };
  useEffect(() => {
    GetCourse();
  }, []);
  return (
    <>
      <div className="my-10">
        <HeroSection />
        <Licences />
        <PopularCoursesSection popularCourses={popularCourses} />
        <TeacherSection />
        <ArticlesSection popularCourses={popularCourses} />
      </div>
    </>
  );
};

export default LandingApp;
