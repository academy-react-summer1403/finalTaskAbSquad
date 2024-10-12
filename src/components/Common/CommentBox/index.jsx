import React from "react";
import ProfileComp from "../ProfileComp";
import TitleSubCommentSection from "./TitleSubCommentSection";
import Button from "../Button/Button";
import { TbMessageReply } from "react-icons/tb";
import LikeDisLikeComment from "../../CourseDetailApp/LeftSide/CommentSection/LikeDisLikeComment";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const CommentBox = ({ name, skill, style, reply = "no", repliedTo = "no" }) => {
  return (
    <div
      className={`border-2 border-fontGray bg-primaryWhite border-l-0 border-t-0 rounded-br-3xl w-11/12 h-[276px] relative ${
        reply == "yes" && repliedTo == "no"
          ? "-top-[30px] w-4/5 right-20 border-r-0 border-b-0 after:content-[' '] after:absolute after:-right-20 after:bottom-0 after:border after:border-solid after:border-primaryGray after:w-full  "
          : ""
      }`}
    >
      <ProfileComp name={name} skill={skill} style={style} />
      <TitleSubCommentSection />
      {/* Reply And Like Section */}
      <div className="flex flex-row items-center gap-14 my-5 pr-10">
        <Button
          text={"جواب دادن"}
          Icon={TbMessageReply}
          phoneStyle={"bg-secondaryBlue !text-primaryBlue h-10"}
        />
        <LikeDisLikeComment />
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <span className="text-base underline">مشاهده جواب ها(20)</span>
          <MdOutlineKeyboardArrowDown size={"16px"} />
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
