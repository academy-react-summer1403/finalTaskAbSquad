import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import ProfileComp from "../../Common/ProfileComp";

const LeftSide = ({ courseDetail }) => {
  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, []);

  return (
    <>
      <div className="border grow flex flex-col items-center justify-start">
        <ImageContainer courseDetail={courseDetail} />
        <ProfileComp />
      </div>
    </>
  );
};

export default LeftSide;
