import React from "react";
import ProfileComp from "../ProfileComp";
import TitleSubCommentSection from "./TitleSubCommentSection";
import Button from "../Button/Button";
import { TbMessageReply } from "react-icons/tb";
import LikeDisLikeComment from "../../CourseDetailApp/LeftSide/CommentSection/LikeDisLikeComment";
const CommentBox = ({ name, skill, style, reply = "no", repliedTo = "no" }) => {
  return (
    <div
      className={`border-2 border-fontGray bg-primaryWhite border-l-0 border-t-0 rounded-br-3xl w-11/12 h-[276px] relative ${
        reply == "yes" && repliedTo == "no"
          ? "-top-[30px] right-20 border-r-0 border-b-0"
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
      </div>
    </div>
  );
};

export default CommentBox;
