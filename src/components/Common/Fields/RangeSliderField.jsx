import * as React from "react";
import { Slider, Box } from "@mui/material";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import TitleSpan from "../NewFields/TitleSpan";

const RangeSliderField = () => {
  const [value, setValue] = React.useState([10000, 1000000]);
  const priceSpan = () => {};
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
    <>
      {/* Whole Container */}
      <div className="flex flex-col gap-0 items-center">
        {/* Title Container */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-center ">
            <TitleSpan title="قیمت" Icon={LiaMoneyBillWaveSolid} />
          </div>
          <span className="text-center text-bold">از {value[0]}</span>
          <span className="text-left">تا {value[1]}</span>
        </div>

        <Box sx={{ width: 290 }}>
          <Slider
            sx={{ height: 5, p: 0, m: 0 }}
            step={10000}
            min={10000}
            max={1000000}
            value={value}
            onChange={handleChange}
          />
        </Box>
      </div>
    </>
  );
};

export default RangeSliderField;
