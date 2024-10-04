import React from "react";
const MainBox = ({ course, ImageContainer, Info, type = "course", style }) => {
  return (
    <>
      <div
        className={`flex flex-col shadow-lg hover:shadow-2xl  dark:hover:shadow-darkMainBoxShadow rounded-3xl h-[528px]  overflow-hidden bg-mainBoxGray dark:bg-primaryBlack ${style}`}
      >
        <ImageContainer course={course} type={type} />
        <Info course={course} type={type} />
      </div>
    </>
  );
};

export default MainBox;
