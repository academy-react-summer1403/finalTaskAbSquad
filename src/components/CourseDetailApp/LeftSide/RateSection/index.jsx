import React from "react";
import RateStars from "./RateStars";
import { MdOutlineStars } from "react-icons/md";
const RateSection = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <MdOutlineStars size={"20px"} className="text-primaryBlue" />
<<<<<<< HEAD
      <span className="ml-3 mr-2">امتیاز دهید</span>
=======
      <span className="sm:text-xl text-base ml-3 mr-2 dark:text-primaryWhite">
        امتیاز دهید
      </span>
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
      <RateStars />
    </div>
  );
};

export default RateSection;
