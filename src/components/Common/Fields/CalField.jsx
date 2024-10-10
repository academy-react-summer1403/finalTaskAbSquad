import React from "react";
import { DatePicker } from "zaman";
import TitleSpan from "../NewFields/TitleSpan";
import { LuCalendarRange } from "react-icons/lu";
const CalField = () => {
  return (
    <>
      <div className="flex flex-col w-full text-align">
        <TitleSpan title="تاریخ برگذاری" Icon={LuCalendarRange} />
        <DatePicker
          inputClass="filterStyle text-left"
          round="x4"
          onChange={(e) => console.log(e.from, e.to)}
          range
        />
      </div>
    </>
  );
};
export default CalField;
