import React from "react";
import FullBahrLogo from "../../assets/Svgs/Header/bahrLogo/FullBahrLogo.png";
const Footer = () => {
  return (
    <>
      {/* The Footer Div */}
      <div className="grid grid-cols-4  rounded-main h-[345px] bg-secondaryGray pt-5 px-3">
        {/* Social Media Routes */}
        <div className="w-1/2 flex flex-col justify-start items-start text-base gap-4 ">
          {/* Bahr Logo */}
          <img className="w-[100px]" src={FullBahrLogo} alt="Bahr Logo" />
          {/* Instagram Div */}
          <div className="flex flex-row justify-center items-center gap-4 px-4 border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed mt-7">
            <img className="w-10" src={FullBahrLogo} alt="Insta Icon" />
            <span>اینستاگرام</span>
          </div>
          {/* Telegram Div */}
          <div className="flex flex-row justify-center items-center gap-4 px-4 border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed ">
            <img className="w-10" src={FullBahrLogo} alt="Insta Icon" />
            <span>تلگرام</span>
          </div>
        </div>
        {/*About The Academy */}
        <div></div>
      </div>
    </>
  );
};

export default Footer;
