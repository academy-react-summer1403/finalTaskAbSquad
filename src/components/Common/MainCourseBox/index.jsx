import React from "react";
const MainBox = ({ course, ImageContainer, Info, type = "course", style }) => {
  return (
    <>
      <div
        className={`flex flex-col border rounded-3xl h-[528px]  overflow-hidden bg-mainBoxGray ${style}`}
      >
        <ImageContainer course={course} type={type} />
        <Info course={course} type={type} />
      </div>
    </>
  );
};

export default MainBox;
