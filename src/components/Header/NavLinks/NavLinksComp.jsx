import React from "react";
import NavLinks from "../Config/index.jsx";
const NavLinkComp = ({ mainStyle, phoneStyle }) => {
  return (
    <>
      <ul
        className={` m-0 p-0 flex flex-row justify-center items-center gap-20 col-span-2 font-semibold group-hover:text-primaryBlue  ${mainStyle} ${phoneStyle} max-lg:flex-col `}
      >
        {NavLinks.map((items, index) => {
          return (
            <li
              key={index}
              className="hover:text-primaryBlue cursor-pointer transition-colors duration-200 active:text-primaryBlue"
            >
              {items.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinkComp;
