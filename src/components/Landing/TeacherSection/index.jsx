import React from "react";
import TeacherComp from "./TeacherComp";
import LandingMainTitle from "../../../components/Common/LandingMainTitle";
const TeacherSection = () => {
  return (
    <>
      {/* Best Teachers Title */}
      <div className="flex flex-col gap-5 justify-center items-center mt-40 mb-10">
        <LandingMainTitle
          title="برترین اساتید هفته"
          desc="اساتیدی که با نظرسنجی در دوره ها به انها بیشترین رای مثبت را دادند"
        />
      </div>
      {/* Best Teachers Section */}
      <div className="grid grid-cols-1  my-20 sm:flex gap-16 sm:flex-row sm:justify-center sm:items-center sm:gap-16">
        <TeacherComp rank="🥈" score="4.1" />
        <TeacherComp rank="🥇" score="4.2" />
        <TeacherComp rank="🥉" score="4.0" />
      </div>
    </>
  );
};

export default TeacherSection;
