import http from "../../Interceptor";
export const GetCourseList = async () => {
  try {
    const res = await http.get("/Home/GetCoursesWithPagination");
    return res;
  } catch (error) {
    console.log(error);
  }
};
