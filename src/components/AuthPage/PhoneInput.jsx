import React from "react";
// import TextField from "../Common/Fields/TextField";
import { TextField } from "@mui/material";

const PhoneInput = ({ titleF, PlaceholderF }) => {
  return (
    <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl">
      <span className="bold text-xl">{titleF}</span>
      <TextField variant="filled" label={PlaceholderF} />
    </div>
  );
};

export default PhoneInput;
