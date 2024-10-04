import React from "react";
import Button from "../Common/Button/Button";
import LeftGlass from "../../assets/Svgs/ErrorPage/LeftGlass.png";
import RightGlass from "../../assets/Svgs/ErrorPage/RightGlass.png";
import { NavLink } from "react-router-dom";
const ErrorNotFound = () => {
  return (
    // Error Box Container
    <div className="dark:bg-primaryBlack h-screen">
      {/* Error Box */}
      <div className=" flex flex-col items-center text-center pt-40 relative">
        <h1 className="text-8xl text-primaryBlue w-content">404</h1>
        <h2 className="text-primaryBlue text-2xl w-80">
          ما صفحه‌ای که دنبالش هستی رو نتونستیم پیدا کنیم!
        </h2>
        <NavLink to="/">
          <Button text="صفحه اصلی" phoneStyle="my-10 py-[14px] px-6" />
        </NavLink>
        <img
          className="absolute  w-20 left-[600px] top-32"
          src={LeftGlass}
          alt=""
        />
        <img
          className="absolute  w-20 right-[580px]  bottom-0"
          src={RightGlass}
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorNotFound;
