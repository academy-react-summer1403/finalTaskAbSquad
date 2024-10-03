import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
const LikeDisLike = ({ course }) => {
  return (
    <>
      <div className="grow flex flex-row justify-evenly items-center">
        <div className="flex flex-row basis-1/2 justify-center gap-3 items-center">
          <SlLike size="24px" />
          <span>24</span>
        </div>
        <div className="flex flex-row basis-1/2 justify-center gap-3 items-center">
          <SlDislike size="24px" />
          <span>23</span>
        </div>
      </div>
    </>
  );
};

export default LikeDisLike;
