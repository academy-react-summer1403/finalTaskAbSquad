import http from "../Interceptor";
export const GetPopularCourses = async () => {
  const res = await http.get("/Home/GetCoursesTop?Count=4");
  return res;
};
