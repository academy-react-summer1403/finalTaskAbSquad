import React from "react";

const LikeDislikeCircle = ({ Icon, iconSize }) => {
  return (
    <>
      <div className="w-14 h-14 rounded-full border border-primaryGray flex justify-center items-center">
        <Icon className={`text-[${iconSize}]`} />
      </div>
    </>
  );
};

export default LikeDislikeCircle;
