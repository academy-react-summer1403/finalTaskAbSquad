import React from "react";
import NavLinks from "../Config/index.jsx";
import BahrLogo from "../../../../assets/Svgs//Header/bahrLogo/Logo.png";
import BahrLogoText from "../../../../assets/Svgs//Header/bahrLogo/LogoText.png";
import InstaIcon from "../../../../assets/Svgs/Footer/instagram.svg";
import TelegramIcon from "../../../../assets/Svgs/Footer/telegram.svg";
import { NavLink } from "react-router-dom";
const NavLinkComp = ({ mainStyle, phoneStyle, navOpen }) => {
  return (
    <>
      <ul
        className={` m-0 p-0 flex flex-row justify-center items-center gap-20 col-span-2 font-semibold group-hover:text-primaryBlue  ${mainStyle} ${phoneStyle} max-lg:flex-col max-lg:gap-6 max-lg:items-start max-lg:p-5 max-lg:pb-0 dark:bg-primaryBlack dark:text-primaryWhite`}
      >
        {NavLinks.map((items, index) => {
          return (
            <li
              key={index}
              className="hover:text-primaryBlue cursor-pointer transition-colors duration-200 active:text-primaryBlue max-lg:flex max-lg:flex-row max-lg:justify-start max-lg:items-center max-lg:w-full"
            >
              {navOpen == "open" && (
                <img className="w-7" src={items.img} alt="Image Gone" />
              )}
              <span className="text-xl text-nowrap grow indent-3">
                {items.title}
              </span>
              {navOpen == "open" && (
                <span className=" overflow-hidden basis-40 text-nowrap text-ellipsis  text-fontGray text-left  ">
                  {items.desc}
                </span>
              )}
            </li>
          );
        })}
        {/* Bottom Part Of The Menu */}
        {navOpen == "open" && (
          <div className=" border-t border-primaryGray w-full flex flex-row py-4">
            <div className=" flex flex-row justify-start items-center grow">
              <div className=" flex flex-row justify-start items-center grow">
                {" "}
                <img className="w-8 pl-1 " src={BahrLogo} alt="Logo" />
                <img className="w-40 " src={BahrLogoText} alt="LogoText" />
              </div>

              <NavLink>
                <img className="w-8 ml-5" src={TelegramIcon} alt="" />
              </NavLink>
              <NavLink>
                <img className="w-8" src={InstaIcon} alt="" />
              </NavLink>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default NavLinkComp;
