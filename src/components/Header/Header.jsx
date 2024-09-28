import React from "react";
import BahrLogo from "../../assets/Svgs/Header/bahrLogo/Logo.png";
import BahrLogoText from "../../assets/Svgs/Header/bahrLogo/LogoText.png";
import Button from "../Common/Button/Button";
import MoonIcon from "../../assets/Svgs/Header/moonDarkMode/moon.svg";
const Header = () => {
  return (
    <>
      {/* Header Container */}
      <div className="w-full h-[56px] grid grid-cols-4 mt-5 text-xl">
        {/* Logo Container */}
        <div className=" flex flex-row justify-start items-center ">
          <img className="w-[50px] pl-1" src={BahrLogo} alt="Logo" />
          <img className="h-[40px]" src={BahrLogoText} alt="LogoText" />
        </div>
        {/* Route Links */}
        <ul className=" m-0 p-0 flex flex-row justify-center items-center gap-20 col-span-2 font-semibold group-hover:text-primaryBlue">
          <li className="hover:text-primaryBlue cursor-pointer transition-colors duration-200">
            خانه
          </li>
          <li className="hover:text-primaryBlue cursor-pointer transition-colors duration-200">
            دوره ها
          </li>
          <li className="hover:text-primaryBlue cursor-pointer transition-colors duration-200">
            اخبار و مقالات
          </li>
          <li className="hover:text-primaryBlue cursor-pointer transition-colors duration-200">
            ارتباط با ما
          </li>
        </ul>
        {/* Night Mode And Sign Up Button */}
        <div className=" flex justify-center items-center gap-8 box box-border">
          {/* Night Mode Button */}
          <span className="border border-solid border-primaryGray w-[56px] h-full rounded-full flex justify-center items-center  cursor-pointer">
            <img
              className="w-6 rotate-[-20deg] "
              src={MoonIcon}
              alt="Dark Mode"
            />
          </span>
          <Button text="ورود یا ثبت نام" />
        </div>
      </div>
    </>
  );
};

export default Header;
