import React from "react";

const TitleAndClose = ({ title, CloseComp, closeState, setCloseState }) => {
  return (
    <>
      <div className="flex flex-row space-between w-full">
        <h2 className="m-0 p-0">{title}</h2>
      </div>
    </>
  );
};

export default TitleAndClose;
