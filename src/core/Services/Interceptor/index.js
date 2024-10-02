import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
});
const onSuccess = (response) => {
  return response.data;
};
const onError = (err) => {};
instance.interceptors.response.use(onSuccess, onError);

export default instance;
