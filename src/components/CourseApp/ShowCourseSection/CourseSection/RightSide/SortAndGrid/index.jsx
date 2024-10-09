import React from "react";

import GridAndTable from "./GridAndTable";
import Sort from "./Sort";
const SortAndGrid = ({ setShowType }) => {
  return (
    <>
      <div className="hidden lg:flex lg:flex-row lg:justify-start lg:items-center lg:w-full  lg:basis-10">
        <GridAndTable setShowType={setShowType} />
        <Sort />
      </div>
    </>
  );
};

export default SortAndGrid;
