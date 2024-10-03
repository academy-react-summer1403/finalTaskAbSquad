import React from "react";
const MainBox = ({ course, ImageContainer, Info }) => {
  return (
    <>
      <div>
        <div className="flex flex-col border rounded-3xl h-[528px]  overflow-hidden bg-mainBoxGray">
          <ImageContainer course={course} />
          <Info course={course} />
        </div>
      </div>
    </>
  );
};

export default MainBox;
