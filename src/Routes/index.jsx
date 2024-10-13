import {
  Root,
  LandingPage,
  ErrorPage,
  Register,
  Login,
  CoursePage,
  CourseDetail,
  NewsPage,
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
    ],
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
