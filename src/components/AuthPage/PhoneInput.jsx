import React from "react";
// import TextField from "../Common/Fields/TextField";
import "./hitest.css";
import { TextField } from "@mui/material";
import { div } from "framer-motion/client";
const PhoneInput = ({ titleF, PlaceholderF }) => {
  return (
    <div>
      <span className="text-xl">{titleF}</span>
      <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl mt-2 ">
        <TextField
          label="شماره همراه خود را وارد کنید"
          InputProps={{
            className: "hitest",
          }}
          InputLabelProps={{
            className: "hitest",
          }}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
