import React from "react";
import { CiSearch } from "react-icons/ci";
import TitleSpan from "./TitleSpan";
const SearchField = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <TitleSpan title="جست‌جو دوره" Icon={CiSearch} />
      <div className="w-full relative ">
        <input
          className="filterStyle "
          placeholder="جست و جو کنید..."
          type="search"
        />
        <div className="flex items-center justify-center w-12 h-full absolute left-0 top-0  text-primaryWhite bg-primaryBlue rounded-2xl">
          <CiSearch className="w-8 h-full" />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
