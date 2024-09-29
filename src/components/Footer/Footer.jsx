import React from "react";
import FullBahrLogo from "../../assets/Svgs/Header/bahrLogo/FullBahrLogo.png";
const Footer = () => {
  return (
    <>
      {/* The Footer Div */}
      <div className="grid grid-cols-4  rounded-main h-[345px] bg-secondaryGray pt-10 px-3">
        {/* Social Media Routes */}
        <div className="w-1/2 flex flex-col justify-start items-start text-base gap-4 ">
          {/* Bahr Logo */}
          <img className="w-[100px]" src={FullBahrLogo} alt="Bahr Logo" />
          {/* Instagram Div */}
          <div className="flex flex-row justify-center items-center gap-4 px-4 border border-solid border-primaryGray  rounded-blueButton bg-primaryWhite text-primaryRed mt-4">
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
        <div className="flex flex-col items-start justify-start gap-9 ">
          <h1 className="text-2xl font-extrabold">آکادمی کد نویسی بحر</h1>
          <h3 className="font-extrabold text-descGray">
            +13 سال سابقه فعالیت در زمینه آموزش کدنویسی از سنین کودکی تا
            بزرگسال. هدف ما همیشه این بوده که دانشجویان را با مهارت های لازم
            برای موفقیت در دنیای فناوری و برنامه نویسی مجهز کنیم.
          </h3>
        </div>
        {/* Footer Links */}
        <div className="flex flex-row just text-xl justify-around text-extrabold ">
          {/* Pages Ul */}
          <ul className="flex flex-col justify-start items-start gap-4">
            <li className="text-descGray mb-7">صفحات</li>
            <li>خانه</li>
            <li>دوره ها</li>
            <li>اخبار و مقالات</li>
          </ul>
          {/* About Us */}
          <ul className="flex flex-col justify-start items-start gap-4">
            <li className="text-descGray mb-7">ما</li>
            <li>اساتید</li>
            <li>درباره ما</li>
            <li>ارتباط باما</li>
          </ul>
        </div>
        {/* Electronic Issue */}
        <div>
          <img src="" alt="نماد الکترونیک" />
        </div>
      </div>
    </>
  );
};

export default Footer;
