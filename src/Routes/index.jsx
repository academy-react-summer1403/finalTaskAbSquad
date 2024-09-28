import App from "../App";
import LandingPage from "../Screens/Landing/LandingPage";

export const PageRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
];
