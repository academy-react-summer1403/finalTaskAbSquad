import React from "react";

const DetailDesc = ({ title, desc }) => {
  return (
    <>
      <div className="w-full dark:text-primaryWhite">
        <h1 className="text-2xl mb-6 p-0 font-bold">{title}</h1>
        <h2 className="text-xl">{desc}</h2>
      </div>
    </>
  );
};

export default DetailDesc;
