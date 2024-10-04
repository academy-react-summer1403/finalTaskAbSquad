import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-xl sm:text-2xl dark:text-primaryWhite">{title}</h1>
      </div>
    </>
  );
};

export default Title;
