import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import RangeSliderField from "./components/utilities/Fields/RangeSliderField";
import CalField from "./components/utilities/Fields/CalField";
import ComboBoxField from "./components/utilities/Fields/ComboBoxField";
import { TextField } from "@mui/material";
function App() {
  return (
    <>
      {/* <CalField />
      <ComboBoxField />
      <TextField type="password" placeholder="type here... pass" />
      <TextField type="email" placeholder="type here...email" />
      <TextField type="text" placeholder="type here... text" />
      <TextField type="file" placeholder="type here..." /> */}
      <Header />
      {/* <RangeSliderField />   */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
