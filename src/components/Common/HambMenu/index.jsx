import React from "react";
import TitleAndClose from "./Title&Close";
const HambMenu = ({
  navOpen,
  setNavOpen,
  Component,
  compWrapperStyle = "",
  compBg = "",
  title = "",
  CloseComp = "",
  closeState = "",
  setCloseState = "",
  hambMenuStyle = "",
}) => {
  return (
    <>
      {/* The Whole Div With HambMenu Inside */}
      <div
        className={`bg-black bg-opacity-50 top-0 absolute left-0 w-full h-full z-50  flex flex-col ${hambMenuStyle}`}
      >
        <div className={compBg}>
          {/* Component Wrapper */}
          <div
            className={`justify-center items-center bg-primaryWhite dark:bg-primaryBlack ${compWrapperStyle}`}
          >
            <TitleAndClose
              title={title}
              CloseComp={CloseComp}
              closeState={closeState}
              setCloseState={setCloseState}
            />
            <Component navOpen={navOpen} compWrapperStyle={compWrapperStyle} />
          </div>
          {/* End Of Component Wrapper */}
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
