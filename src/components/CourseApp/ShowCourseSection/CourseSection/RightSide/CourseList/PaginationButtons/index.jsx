import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const PaginationButtons = ({ courseList }) => {
  return (
    <>
      {/* Number Containers, Including Arrows */}
      <div className="border flex flex-row justify-start items-center w-[322px] h-12 absolute -bottom-16 rounded-2xl overflow-hidden">
        {/* Right Arrow */}
        <div className="basis-2/12 border h-full flex justify-center items-center text-fontGray active:text-primaryBlue">
          <MdKeyboardArrowRight className="w-8 h-8" />
        </div>
        {/* Page Numbers */}
        <div className="grow border h-full flex flex-row justify-center items-center text-center">
          <div className="basis-1/5">5</div>
          <div className="basis-1/5">4</div>
          <div className="basis-1/5">3</div>
          <div className="basis-1/5">2</div>
          <div className="basis-1/5">1</div>
        </div>
        {/* Left Arrow */}
        <div className="basis-2/12 border h-full flex justify-center items-center text-fontGray active:text-primaryBlue">
          <MdKeyboardArrowLeft className="w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default PaginationButtons;
