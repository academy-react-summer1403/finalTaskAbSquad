import React from "react";
import { FilterOptions } from "../../../../../core/utilities/FilterOptions/filter.utils.js";
import SelectField from "../../../../Common/NewFields/SelectField";
import SearchField from "../../../../Common/NewFields/SearchField";
import RangeSliderField from "../../../../Common/Fields/RangeSliderField.jsx";
import CalField from "../../../../Common/Fields/CalField.jsx";
const LeftSide = () => {
  return (
    <>
      <div className="flex gap-5 border basis-12 w-full bg-mainBoxGray rounded-3xl p-4 order-1 lg:max-xl:hidden xl:order-2 xl:basis-1/4 xl:flex-col mt-7 ml-3">
        <SearchField />
        {FilterOptions.map((it, index) => {
          return (
            <SelectField
              key={index}
              options={it.label}
              filterTitle={it.filterTitle}
              Icon={it.icon}
            />
          );
        })}
        <RangeSliderField />
        <CalField />
      </div>
    </>
  );
};

export default LeftSide;
