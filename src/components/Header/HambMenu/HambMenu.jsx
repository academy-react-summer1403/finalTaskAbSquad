import React from "react";
import NavLinkComp from "../NavLinks/NavLinksComp";
const HambMenu = ({ navOpen }) => {
  return (
    <>
      {/* The Whole Div With HambMenu Inside */}
      <div className="bg-black bg-opacity-50  absolute top-0 right-0 w-full h-full z-50 ">
        <div className="bg-primaryWhite rounded-t-2xl">
          <NavLinkComp phoneStyle="" navOpen={navOpen} />
        </div>
      </div>
    </>
  );
};

export default HambMenu;
