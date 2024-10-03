import Root from "../components/Root";
import LandingPage from "../Screens/Landing/LandingPage";
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
];
