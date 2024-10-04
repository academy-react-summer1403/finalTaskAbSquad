import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Root = () => {
  return (
    <>
      <div className="mx-auto px-[2.5%] lg:w-[1800px] lg:px-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Root;
