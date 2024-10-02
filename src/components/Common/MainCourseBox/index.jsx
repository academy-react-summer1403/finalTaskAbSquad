import React from "react";
const MainBox = ({ course, ImageContainer, Info }) => {
  return (
    <>
      <div className="flex flex-col border rounded-3xl h-[528px]  overflow-hidden bg-mainBoxGray">
        <ImageContainer course={course} />
        <Info course={course} />
      </div>
    </>
  );
};

export default MainBox;
