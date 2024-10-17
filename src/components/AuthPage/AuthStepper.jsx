import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import RightSecRow from "./RightSecRow";
import { FaHouse } from "react-icons/fa6";
import { FaCoffee, FaBeer, FaApple } from "react-icons/fa";
import LeftSection from "./LeftSection";
// import RightSection from "./RightSection";
const AuthStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return <></>;
};

export default AuthStepper;
