import React from "react";
import { Outlet } from "react-router-dom";
// import RightSection from "../RIghtSection/RightSection";
import LeftSection from "../LeftSection/LeftSection";
const RootPanel = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="flex gap-20 bg-primaryGray max-md:flex-col">
=======
      <div className="flex gap-20 bg-primaryGray max-md:flex-col dark:bg-black h-screen">
>>>>>>> c35d7997029756c8b09820d15d21d4efb8f246ac
        <RightSection />
        <div className="">
          <LeftSection />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RootPanel;
