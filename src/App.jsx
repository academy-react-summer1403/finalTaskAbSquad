import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import TextField from "./components/utilities/Fields/TextField";
function App() {
  return (
    <>
      {/* <TextField /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
