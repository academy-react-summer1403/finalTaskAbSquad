import React from "react";
import BahrLogo from "../../assets/Svgs/Header/BahrLogo/Logo.png";
import BahrLogoText from "../../assets/Svgs/Header/BahrLogo/LogoText.png";
import Button from "../Common/Button/Button";
const Header = () => {
  return (
    <>
      {/* Header Container */}
      <div className="w-full h-[56px] grid grid-cols-4 mt-5 text-xl">
        {/* Logo Container */}
        <div className=" flex flex-row justify-start items-center">
          <img className="w-[50px] pl-1" src={BahrLogo} alt="Logo" />
          <img className="h-[40px]" src={BahrLogoText} alt="LogoText" />
        </div>
        {/* Route Links */}
        <ul className=" m-0 p-0 flex flex-row justify-center items-center gap-20 col-span-2 font-semibold">
          <li>خانه</li>
          <li>دوره ها</li>
          <li>اخبار و مقالات</li>
          <li>ارتباط با ما</li>
        </ul>
        {/* Night Mode And Sign Up Button */}
        <div className=" flex justify-center items-center gap-8 box box-border">
          <span className="border border-solid border-primaryGray w-[56px] h-full rounded-full">
            Moon
          </span>
          <Button text="ورود یا ثبت نام" />
        </div>
      </div>
    </>
  );
};

export default Header;
