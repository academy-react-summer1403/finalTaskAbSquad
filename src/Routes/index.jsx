import Root from "../components/Root";
import LandingPage from "../Screens/Landing/LandingPage";
import ErrorPage from "../components/Error";
import Register from "../Screens/Register/Register";
import Login from "../Screens/Login/Login";
export const PageRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
