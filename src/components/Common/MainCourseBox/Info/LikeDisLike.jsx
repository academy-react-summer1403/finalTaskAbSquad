import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const LikeDisLike = ({ course }) => {
  return (
    <>
      <div className="grow flex flex-row justify-evenly items-center">
        <div className="flex flex-row basis-1/2 justify-center gap-2 items-center">
          <AiOutlineLike size="24px" />
          <span>24</span>
        </div>
        <div className="flex flex-row basis-1/2 justify-center gap-2 items-center">
          <AiOutlineDislike size="24px" />
          <span>23</span>
        </div>
      </div>
    </>
  );
};

export default LikeDisLike;
