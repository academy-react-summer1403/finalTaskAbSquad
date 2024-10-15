import React, { useState } from "react";
import BahrLogoComp from "../../Common/BahrLogoComp";
import Button from "../../Common/Button/Button";
import { RxDashboard } from "react-icons/rx";
import {
  PiBookBookmarkLight,
  PiClockCountdownLight,
  PiMoneyWavy,
} from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineExitToApp } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";

const RightSection = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex gap-3 flex-col my-10 mr-8 bg-primaryWhite rounded-2xl p-5 ">
      <div className="flex flex-row justify-start items-start self-start  mb-8">
        <BahrLogoComp />
      </div>
      <ul className="flex gap-3 flex-col">
        <span>عمومی</span>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "dashboard"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={RxDashboard}
            text="داشبورد"
            onClick={() => handleClick("dashboard")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "courses"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={VscBook}
            text="دوره من"
            onClick={() => handleClick("courses")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "reservations"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={PiClockCountdownLight}
            text="رزرو من"
            onClick={() => handleClick("reservations")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "favoritesCourse"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={PiBookBookmarkLight}
            text="علاقعمندی دوره"
            onClick={() => handleClick("favoritesCourse")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "favoritesBook"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={CiBookmark}
            text="علاقهمندی کتاب"
            onClick={() => handleClick("favoritesBook")}
          />
        </li>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "profile"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={PiMoneyWavy}
            text="پروفایل"
            onClick={() => handleClick("profile")}
          />
        </li>
      </ul>
      <ul className="flex gap-3 flex-col mb-10">
        <span>مالی</span>
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "payments"
                ? "!bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={CgProfile}
            text="پرداخت ها"
            onClick={() => handleClick("payments")}
          />
        </li>
      </ul>
      <ul className="flex gap-3 flex-col">
        <li>
          <Button
            phoneStyle={`h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite !text-black ${
              activeButton === "accountSettings"
                ? " !bg-blue-500 !text-white"
                : "!justify-start"
            }`}
            Icon={TbUserEdit}
            text="حساب های کاربری"
            onClick={() => handleClick("accountSettings")}
          />
        </li>
        <li>
          <Button
            phoneStyle="h-[53px] w-[228px] flex gap-3 text-xl !bg-primaryWhite  text-red-500"
            Icon={MdOutlineExitToApp}
            text="خروج از حساب"
          />
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
