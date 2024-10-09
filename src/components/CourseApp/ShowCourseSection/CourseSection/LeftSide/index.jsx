import React from "react";
import { FilterOptions } from "../../../../../core/utilities/FilterOptions/filter.utils";
import SelectField from "../../../../Common/NewFields/SelectField";

const LeftSide = () => {
  return (
    <>
      <div className="flex border basis-12 w-full order-1 lg:max-xl:hidden xl:order-2 xl:basis-1/4 xl:flex-col">
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
      </div>
    </>
  );
};

export default LeftSide;
