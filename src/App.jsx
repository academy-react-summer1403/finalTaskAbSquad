import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  toast("hello world");
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="text-primaryBlue">hi this is a test 1</div>
      <div className="text-primaryWhite">hi this is a test 2</div>
      <div className="text-primaryViolet">hi this is a test 3</div>
    </>
  );
}

export default App;
