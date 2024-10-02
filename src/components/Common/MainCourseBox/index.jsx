import React from "react";
import ImageContainer from "./ImageContainer";
import Info from "./Info";

const MainBox = () => {
  return (
    <>
      <div className="flex flex-col border rounded-3xl h-[528px] w-80 overflow-hidden">
        <ImageContainer />
        <Info />
      </div>
    </>
  );
};

export default MainBox;
