import { path } from "framer-motion/client";
import {
  Root,
  LandingPage,
  ErrorPage,
  Register,
  Login,
  CoursePage,
  CourseDetail,
  NewsPage,
  NewsDetail,
  ForgotPass,
  PanelMain,
  RootPanel,
} from "../core/utilities/Routes/routes.utils.js";
// import Test from "./Test.jsx";
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
        path: "/CoursePage/:PageNumber?/:RowsOfPage?/:SortingCol?/:SortType?",
        element: <CoursePage />,
      },
      {
        path: "/CourseDetail/:CourseId?",
        element: <CourseDetail />,
      },
      {
        path: "/NewsPage",
        element: <NewsPage />,
      },
      {
        path: "/NewsPageDetail/:Id?",
        element: <NewsDetail />,
      },
    ],
  },
  {
    path: "/Panel",
    element: <RootPanel />,
    // children: [
    //   {
    //     path: "/Panel/test",
    //     element: <Test />,
    //   },
    // ],
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  { path: "/ForgotPass", element: <ForgotPass /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
