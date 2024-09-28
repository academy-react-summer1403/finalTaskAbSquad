import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { PageRoutes } from "./Routes/index.jsx"; // routes for pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(PageRoutes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
