import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Root = () => {
  return (
    <>
      <div className="mx-auto px-[2.5%] 2xl:w-[1528px] xl:w-[1280px] 2xl:px-0 pb-16 md:w-[700px] sm:w-full w-[375px]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Root;
