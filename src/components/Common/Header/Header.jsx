import React, { useEffect, useState } from "react";
import BahrLogo from "../../../assets/Svgs/Header/bahrLogo/Logo.png";
import BahrLogoText from "../../../assets/Svgs/Header/bahrLogo/LogoText.png";
import Button from "../Button/Button";
import MoonIcon from "../../../assets/Svgs/Header/moonDarkMode/moon.svg";
import NavLinkComp from "./NavLinks/NavLinksComp";
import HambMenu from "./HambMenu/HambMenu";
import { HandleDarkMode } from "../../../JS/DarkMode/DarkMode";
const Header = () => {
  const [navOpen, setNavOpen] = useState("close");
  const [darkMode, setDarkMode] = useState("off");
  const openNavModal = () => {
    setNavOpen("open");
  };
  useEffect(() => {
    HandleDarkMode(darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Header Container */}
      <div className="w-full h-[56px] grid grid-cols-4 mt-5 text-xl max-lg:h-10 max-lg:flex max-lg:flex-row dark:bg-primaryBlack dark:text-primaryWhite">
        {/* Logo Container */}
        <div className=" flex flex-row justify-start items-center max-lg:grow ">
          <img className="w-[50px] pl-1 " src={BahrLogo} alt="Logo" />
          <img
            className="h-[40px] max-lg:hidden"
            src={BahrLogoText}
            alt="LogoText"
          />
        </div>
        {/* Route Links */}
        {<NavLinkComp mainStyle="max-lg:hidden" />}
        {/* Night Mode And Sign Up Button */}
        <div className=" flex justify-center items-center gap-8 box box-border max-lg:flex-end max-lg:gap-0">
          {/* Night Mode Button */}
          <span
            onClick={() => {
              if (darkMode == "on") {
                setDarkMode("off");
              } else if (darkMode == "off") {
                setDarkMode("on");
              }
            }}
            className="border border-solid border-primaryGray w-[56px] h-full rounded-full flex justify-center items-center  cursor-pointer max-lg:ml-4"
          >
            <img
              className="w-6 rotate-[-20deg]  "
              src={MoonIcon}
              alt="Dark Mode"
            />
          </span>
          {/*  */}
          <Button phoneStyle="max-lg:text-base" text="ورود یا ثبت نام" />
          {/* Menu Phone  */}
          <div
            className="lg:hidden  h-3/5  w-10 relative after:content-[' '] after:w-4  after:border  after:border-solid after:border-primaryBlack after:absolute after:top-0 after:left-0 after:rounded-t-lg before:content-[' '] before:w-3  before:border  before:border-solid before:border-primaryBlack before:absolute before:bottom-0 before:left-0 before:rounded-t-lg dark:after:border-primaryWhite dark:before:border-primaryWhite"
            onClick={openNavModal}
          >
            <span className="border-t-2 border-solid border-primaryBlack rounded-t-lg w-5 absolute top-[48%] left-0 dark:border-primaryWhite"></span>
          </div>
        </div>
      </div>
      {navOpen == "open" && (
        <HambMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      )}
    </>
  );
};

export default Header;
