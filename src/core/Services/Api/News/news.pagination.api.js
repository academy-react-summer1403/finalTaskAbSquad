import http from "../../Interceptor";
export const GetNewsPagination = async () => {
  try {
    const res = await http.get("/News?");
    return res.news;
  } catch (error) {
    console.log(error);
  }
};
