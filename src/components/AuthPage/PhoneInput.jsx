import React from "react";
// import TextField from "../Common/Fields/TextField";
import "./hitest.css";
import { TextField } from "@mui/material";
const PhoneInput = ({ titleF, PlaceholderF }) => {
  return (
    <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl ">
      <span className="bold text-xl">{titleF}</span>
      <TextField
        label={PlaceholderF}
        InputProps={{
          className: "hitest",
        }}
        InputLabelProps={{
          className: "",
        }}
      />
    </div>
  );
};

export default PhoneInput;
