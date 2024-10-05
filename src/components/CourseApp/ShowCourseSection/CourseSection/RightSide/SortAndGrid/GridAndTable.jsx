import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineTableRows } from "react-icons/md";
const GridAndTable = () => {
  return (
    <>
      <div className="flex flex-row basis-32 border-l border-primaryBlack h-full gap-3 justify-center items-center dark:border-primaryWhite dark:text-primaryWhite">
        <CiGrid41 className="h-7 w-7 cursor-pointer hover:text-primaryBlue" />
        <MdOutlineTableRows className="h-7 w-7 cursor-pointer hover:text-primaryBlue" />
      </div>
    </>
  );
};

export default GridAndTable;
