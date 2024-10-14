import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
<<<<<<< HEAD
const TextAboveCourse = () => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-2 text-fontGray mb-16">
      <span>لیست دوره ها</span>
=======
const TextAboveCourse = ({ title }) => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-2 text-fontGray mb-16">
      <span>{title}</span>
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
      <MdKeyboardDoubleArrowDown className="text-fontGray w-6 h-6" />
    </div>
  );
};

export default TextAboveCourse;
