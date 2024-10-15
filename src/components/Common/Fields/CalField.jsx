import React from "react";
import { DatePicker } from "zaman";
import TitleSpan from "../NewFields/TitleSpan";
import { LuCalendarRange } from "react-icons/lu";
const CalField = () => {
  return (
    <>
      <div className="">
        <TitleSpan title="تاریخ برگذاری" Icon={LuCalendarRange} />
        <DatePicker
          className="relative z-[60]"
          inputClass="filterStyle text-primaryBlack text-left dark:bg-primaryBlack dark:border relative z-[100]"
          round="x4"
          range
        />
      </div>
    </>
  );
};
export default CalField;
