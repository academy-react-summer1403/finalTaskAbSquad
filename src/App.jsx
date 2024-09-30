import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import RangeSliderField from "./components/utilities/Fields/RangeSliderField";

function App() {
  return (
    <>
      <Header />
      <RangeSliderField />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
