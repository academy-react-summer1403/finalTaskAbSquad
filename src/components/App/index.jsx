import * as React from "react";
import "./App.css";
import { PageRoutes } from "../../Routes"; // routes for pages
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const router = createBrowserRouter(PageRoutes);
// An Auxilary Way For Adding Animate Presence
const Main = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <RouterProvider
          router={router}
          location={location}
          key={location.pathname}
        />
      </AnimatePresence>
    </>
  );
};
function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </>
  );
}

export default App;
