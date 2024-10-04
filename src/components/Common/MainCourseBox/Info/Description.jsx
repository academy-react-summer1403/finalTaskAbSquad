import React from "react";

const Description = ({ desc, type }) => {
  return (
    <textarea
      disabled
      readOnly
      maxLength={50}
      cols={50}
      rows={3}
      className={
        type !== "LandingNews"
          ? "text-fontGray text-sm sm:text-base bg-mainBoxGray overflow-hidden resize-none text-ellipsis "
          : "text-fontGray text-sm sm:text-base bg-mainBoxGray overflow-hidden resize-none text-ellipsis "
      }
    >
      {desc}
    </textarea>
  );
};

export default Description;
