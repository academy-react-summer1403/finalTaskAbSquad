import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const options = ["Option 1", "Option 2"];
const ComboBoxField = () => {
  //   const [value, setValue] = useState(options[0]);
  //   const [inputValue, setInputValue] = useState("");
  return (
    <Autocomplete
      disablePortal
      options={options}
      className="w-96 rounded-none"
      renderInput={(params) => <TextField {...params} label="انتخاب کنید" />}
    />
  );
};

export default ComboBoxField;
