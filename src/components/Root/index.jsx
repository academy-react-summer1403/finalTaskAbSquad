import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Root = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="mx-auto px-[2.5%] w-[95%] 2xl:w-[1528px] monitor:w-[1820px] xl:w-[1280px] 2xl:px-0 pb-16 lg:w-[1000px] sm:w-full overflow-hidden">
=======
      <div className="mx-auto px-[2.5%] w-[95%] 2xl:w-[1428px] monitor:w-[1820px] xl:w-[1280px] 2xl:px-0 pb-16 lg:w-[1000px] sm:w-full overflow-hidden">
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Root;
