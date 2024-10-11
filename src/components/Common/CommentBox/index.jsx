import React from "react";
import ProfileComp from "../ProfileComp";
const CommentBox = ({ name, skill, style, reply = "no", repliedTo = "no" }) => {
  return (
    <div
      className={`border-4 bg-primaryWhite border-l-0 border-t-0 rounded-br-3xl w-11/12 h-[276px] relative ${
        reply == "yes" && repliedTo == "no"
          ? "-top-[30px] right-20 border-r-0 border-b-0"
          : ""
      }`}
    >
      <ProfileComp name={name} skill={skill} style={style} />
    </div>
  );
};

export default CommentBox;
