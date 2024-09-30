import React from "react";
import NavLinks from "../Config/index.jsx";
import BahrLogo from "../../../assets/Svgs//Header/bahrLogo/Logo.png";
import BahrLogoText from "../../../assets/Svgs//Header/bahrLogo/LogoText.png";
const NavLinkComp = ({ mainStyle, phoneStyle, navOpen }) => {
  return (
    <>
      <ul
        className={` m-0 p-0 flex flex-row justify-center items-center gap-20 col-span-2 font-semibold group-hover:text-primaryBlue  ${mainStyle} ${phoneStyle} max-lg:flex-col max-lg:gap-6 max-lg:items-start max-lg:p-5`}
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
                <span className=" overflow-hidden basis-40 text-nowrap text-ellipsis bg-primaryWhite text-fontGray text-left ">
                  {items.desc}
                </span>
              )}
            </li>
          );
        })}
        {/* Bottom Part Of The Menu */}
        {navOpen == "open" && (
          <div className="border border-t-1 border-primaryGray w-full flex flex-row">
            <div className=" flex flex-row justify-start items-center max-lg:grow">
              <img className="w-[50px] pl-1 " src={BahrLogo} alt="Logo" />
              <img
                className="h-[40px] max-lg:hidden"
                src={BahrLogoText}
                alt="LogoText"
              />
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default NavLinkComp;
