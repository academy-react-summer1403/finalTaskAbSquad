import {
  Root,
  LandingPage,
  ErrorPage,
  Register,
  Login,
  CoursePage,
  CourseDetail,
<<<<<<< HEAD
  ForgotPass,
} from "../core/utilities/Routes/routes.utils.js";
=======
  NewsPage,
  NewsDetail,
} from "../core/utilities/Routes/routes.utils.js";

>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
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
<<<<<<< HEAD
=======
      {
        path: "/NewsPage",
        element: <NewsPage />,
      },
      {
        path: "/NewsPageDetail/:Id?",
        element: <NewsDetail />,
      },
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
    ],
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  { path: "/ForgotPass", element: <ForgotPass /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
