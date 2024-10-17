import * as React from "react";
import "./App.css";
import { PageRoutes } from "../../Routes"; // routes for pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(PageRoutes);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
