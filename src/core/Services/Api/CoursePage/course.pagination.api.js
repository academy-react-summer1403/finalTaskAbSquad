import http from "../../Interceptor";
export const GetCourseList = async () => {
  try {
    const res = await http.get("/Home/GetCoursesWithPagination?");
    return res.courseFilterDtos;
  } catch (error) {
    console.log(error);
  }
};
