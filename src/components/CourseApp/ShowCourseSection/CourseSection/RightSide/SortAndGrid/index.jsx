import React from "react";

import GridAndTable from "./GridAndTable";
import Sort from "./Sort";
<<<<<<< HEAD
const SortAndGrid = ({ setShowType }) => {
  return (
    <>
      <div className="hidden xl:flex xl:flex-row xl:justify-start xl:items-center xl:w-full  xl:basis-10">
        <GridAndTable setShowType={setShowType} />
=======
const SortAndGrid = ({ setShowType, page = "" }) => {
  return (
    <>
      <div className="hidden xl:flex xl:flex-row xl:justify-start xl:items-center xl:w-full  xl:basis-10">
        {page != "News" && <GridAndTable setShowType={setShowType} />}
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
        <Sort />
      </div>
    </>
  );
};

export default SortAndGrid;
