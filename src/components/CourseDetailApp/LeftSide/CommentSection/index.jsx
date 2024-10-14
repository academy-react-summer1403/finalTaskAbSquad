<<<<<<< HEAD
﻿import React from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
const CommentSection = () => {
  return (
    <>
      <div className="flex flex-col my-20 w-full">
        <h1 className="text-[48px] mb-9">نظرات</h1>
=======
﻿import React, { useState } from "react";
import Button from "../../../Common/Button/Button";
import { BsChatLeftText } from "react-icons/bs";
import CommentBox from "../../../Common/CommentBox";
const CommentSection = ({ setCommentModalOpen }) => {
  return (
    <>
      <div className="flex flex-col my-20 w-full">
        <h1 className="sm:text-[48px] text-3xl mb-9">نظرات</h1>
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
        {/* Comment Section */}
        <div className="flex flex-col items-center grayBox p-5 ">
          <Button
            text={"نظر شما"}
<<<<<<< HEAD
            phoneStyle={"w-full text-xl h-10 gap-3 mb-10"}
            Icon={BsChatLeftText}
            iconSize={"20px"}
=======
            phoneStyle={"w-full sm:text-xl text-base h-10 gap-3 mb-10"}
            Icon={BsChatLeftText}
            iconSize={"20px"}
            onClick={() => setCommentModalOpen("open")}
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
          />
          <CommentBox
            name={"ممدعلی"}
            skill={"هیچی"}
            style={" absolute -right-[30px]"}
            reply="no"
            repliedTo="yes"
          />
          <CommentBox
            name={"Asghar"}
            skill={"Mamdialiam"}
            style={" absolute -right-[30px]"}
            reply="yes"
            repliedTo="no"
          />
<<<<<<< HEAD
=======
          <CommentBox
            name={"ممدعلی"}
            skill={"هیچی"}
            style={" absolute -right-[30px]"}
            reply="no"
            repliedTo="no"
          />
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
        </div>
      </div>
    </>
  );
};

export default CommentSection;
