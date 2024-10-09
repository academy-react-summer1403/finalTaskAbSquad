import React from "react";
const MainBox = ({
  course,
  ImageContainer,
  Info,
  type = "course",
  showType = "Grid",
  style,
  tableImgConStyle = "",
  tableInfoStyle = "",
}) => {
  return (
    <>
      <div
        className={`flex shadow-lg hover:shadow-2xl  dark:border dark:border-fontGray dark:hover:shadow-darkMainBoxShadow rounded-3xl  overflow-hidden bg-mainBoxGray dark:bg-primaryBlack ${style}`}
      >
        <ImageContainer
          course={course}
          type={type}
          tableImgConStyle={tableImgConStyle}
        />
        <Info
          course={course}
          type={type}
          showType={showType}
          shotableInfoStyle={tableInfoStyle}
        />
      </div>
    </>
  );
};

export default MainBox;
