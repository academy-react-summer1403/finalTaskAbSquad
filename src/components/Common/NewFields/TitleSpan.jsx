import React from "react";
const TitleSpan = ({ title = "titleeee", Icon }) => {
  return (
    <>
      <div className="flex flex-row justify-start gap-3 items-center w-full mb-2">
        <Icon className="w-8 h-8" />
        <span className="block w-full">{title}</span>
      </div>
    </>
  );
};

export default TitleSpan;
