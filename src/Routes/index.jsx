import Root from "../components/Root";
import LandingPage from "../Screens/Landing/LandingPage";
import Register from "../Screens/Register/Register";
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
  { path: "/Register", element: <Register /> },
];
