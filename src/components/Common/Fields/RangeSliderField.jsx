import * as React from "react";
import { Slider, Box } from "@mui/material";
const RangeSliderField = () => {
  const [value, setValue] = React.useState([100000, 300000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const marks = [
    {
      value: 100000,
      label: 100000,
    },
  ];
  return (
    <Box sx={{ width: 290, height: 10 }}>
      <Slider
        step={100000}
        min={10000}
        max={1000000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};

export default RangeSliderField;
