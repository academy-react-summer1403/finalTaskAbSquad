import React from "react";
const MainBox = ({ course, ImageContainer, Info, type = "course" }) => {
  return (
    <>
      <div>
        <div className="flex flex-col border rounded-3xl h-[528px]  overflow-hidden bg-mainBoxGray">
          <ImageContainer course={course} type={type} />
          <Info course={course} type={type} />
        </div>
      </div>
    </>
  );
};

export default MainBox;
