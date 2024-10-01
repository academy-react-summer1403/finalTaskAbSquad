import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="dark:bg-primaryBlack w-full  pt-5 px-[2.5%]">
      <App />
    </div>
  </StrictMode>
);
