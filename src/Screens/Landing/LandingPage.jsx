import React from "react";
import Introduction from "../../components/Landing/Introduction";
import Button from "../../components/Common/Button/Button";
import QuickAccess from "../../components/Landing/QuickAccess";
import BlueStrap from "../../components/Landing/BlueStrap";
import Licences from "../../components/Landing/Licences";
import LandingMainTitle from "../../components/Common/LandingMainTitle";
import MainBox from "../../components/Common/MainCourseBox";
const LandingPage = () => {
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
      <div className="flex flex-col justify-center items-center my-28">
        <LandingMainTitle
          title="محبوب ترین دوره ها"
          desc="دوره هایی که بین دانشجو های ما محبوبیت بالایی داشتند"
        />
      </div>
      <MainBox />
    </div>
  );
};

export default LandingPage;
