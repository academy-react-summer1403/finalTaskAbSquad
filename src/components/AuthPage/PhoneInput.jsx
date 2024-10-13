import React from "react";
// import TextField from "../Common/Fields/TextField";
import "./hitest.css";
import { TextField } from "@mui/material";
import { div } from "framer-motion/client";
const PhoneInput = ({ titleF, PlaceholderF }) => {
  return (
    <div className=" max-md:w-[345px] max-md:mx-auto">
      <span className="text-xl md:mx-12">{titleF}</span>
      <div className="flex flex-col w-[538px] bg-primaryGray rounded-3xl text-5xl mt-2 md:mx-12  max-md:w-[345px] max-md:items-start ">
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
