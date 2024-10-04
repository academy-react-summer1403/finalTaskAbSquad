import React from "react";
import { FaHome } from "react-icons/fa";
const IconButton = ({ icon: IconComponent, label }) => {
  return (
    <button>
      <IconComponent /> {label}
    </button>
  );
};

const RightSecDesc = ({ desc }) => {
  return (
    <div>
      <h1>{desc}</h1>
    </div>
  );
};

export default RightSecDesc;
