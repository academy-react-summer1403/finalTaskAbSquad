import React from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
const CommentSection = () => {
  return (
    <>
      <div className="flex flex-col my-20 w-full">
        <h1 className="text-[48px]">نظرات</h1>
        <div className="grayBox h-96 p-5 ">
          <Button
            text={"نظر شما"}
            phoneStyle={"w-full text-xl h-10 gap-3"}
            Icon={BsChatLeftText}
            iconSize={"20px"}
          />
        </div>
      </div>
    </>
  );
};

export default CommentSection;
