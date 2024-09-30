import React from "react";
import { DatePicker, CalendarProvider } from "zaman";

const CalField = () => {
  return (
    <>
      <div className="w-96 bg-white text-red-600 text-align">
        <DatePicker
          inputClass="w-96 bg-slate-300 text-center italic"
          round="x4"
          onChange={(e) => console.log(e.from, e.to)}
          range
        />
      </div>
    </>
  );
};
export default CalField;
