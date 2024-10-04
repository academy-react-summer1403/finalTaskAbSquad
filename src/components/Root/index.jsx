import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import BahrLogoComp from "../Common/BahrLogoComp";
import RightSection from "../AuthPage/RightSection";
const Root = () => {
  return (
    <>
      {/* <BahrLogoComp /> */}
      {/* <Header />
      <Outlet />
      <Footer /> */}
      <RightSection />
    </>
  );
};
export default Root;
