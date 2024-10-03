import React from "react";
const HambMenu = ({ navOpen, setNavOpen, Component }) => {
  return (
    <>
      {/* The Whole Div With HambMenu Inside */}
      <div className="bg-black bg-opacity-50  absolute top-0 left-0 w-full h-full z-50 lg:hidden flex flex-col ">
        <div className="bg-primaryWhite rounded-t-2xl">
          <Component phoneStyle="" navOpen={navOpen} />
        </div>
        {/* Black Screen Tap */}
        <div
          className="h-full dark:bg-primaryWhite opacity-20"
          onClick={() => {
            setNavOpen("close");
          }}
        ></div>
      </div>
    </>
  );
};

export default HambMenu;
