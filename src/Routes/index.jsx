import {
  Root,
  LandingPage,
  ErrorPage,
  Register,
  Login,
  CoursePage,
} from "../core/utilities/Routes/routes.utils.js";
export const PageRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/CoursePage",
        element: <CoursePage />,
      },
    ],
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
