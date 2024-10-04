import Root from "../components/Root";
import LandingPage from "../Screens/Landing/LandingPage";
import ErrorPage from "../components/Error";
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
  {
    path: "*",
    element: <ErrorPage />,
  },
];
