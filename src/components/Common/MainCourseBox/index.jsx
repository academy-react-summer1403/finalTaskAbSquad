import React from "react";
const MainBox = ({
  course,
  ImageContainer,
  Info,
  type = "course",
  style,
  tableImgConStyle = "",
  tableInfoStyle = "",
}) => {
  return (
    <>
      <div
        className={`flex shadow-lg hover:shadow-2xl  dark:hover:shadow-darkMainBoxShadow rounded-3xl  overflow-hidden bg-mainBoxGray dark:bg-primaryBlack ${style}`}
      >
        <ImageContainer
          course={course}
          type={type}
          tableImgConStyle={tableImgConStyle}
        />
        <Info course={course} type={type} tableInfoStyle={tableInfoStyle} />
      </div>
    </>
  );
};

export default MainBox;
