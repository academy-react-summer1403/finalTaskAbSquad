import React from "react";
const TitleSpan = ({ title = "titleeee", Icon }) => {
  return (
    <>
      <img src={Icon} alt="" />
      <span className="block w-full pr-4">{title}</span>
    </>
  );
};

export default TitleSpan;
