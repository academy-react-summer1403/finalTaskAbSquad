import React from "react";

const FontGraySmallText = ({ text, style = "" }) => {
  return <div className={`text-fontGray ${style}`}>{text}</div>;
};

export default FontGraySmallText;
