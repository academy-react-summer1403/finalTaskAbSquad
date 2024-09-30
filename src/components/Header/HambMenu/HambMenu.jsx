import React from "react";
import NavLinkComp from "../NavLinks/NavLinksComp";
const HambMenu = ({ navOpen, setNavOpen }) => {
  return (
    <>
      {/* The Whole Div With HambMenu Inside */}
      <div className="bg-black bg-opacity-50  absolute top-0 left-0 w-full h-full z-50 lg:hidden flex flex-col  ">
        <div className="bg-primaryWhite rounded-t-2xl">
          <NavLinkComp phoneStyle="" navOpen={navOpen} />
        </div>
        {/* Black Screen Tap */}
        <div
          className="h-full"
          onClick={() => {
            setNavOpen("close");
          }}
        ></div>
      </div>
    </>
  );
};

export default HambMenu;
