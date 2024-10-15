import React from "react";
import { Outlet } from "react-router-dom";
import RightSection from "../RIghtSection/RightSection";
import LeftSection from "../LeftSection/LeftSection";
const RootPanel = () => {
  return (
    <>
      <div className="flex gap-20 bg-primaryGray">
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
