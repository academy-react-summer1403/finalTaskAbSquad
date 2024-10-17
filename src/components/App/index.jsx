import * as React from "react";
import "./App.css";
import { PageRoutes } from "../../Routes"; // routes for pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
const router = createBrowserRouter(PageRoutes);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
