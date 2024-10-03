import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
