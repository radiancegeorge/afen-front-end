import Axios from "axios";
const token = window.sessionStorage.getItem("isAuth");
const axios = Axios.create({
  baseURL: "https://blogserver.afengroup.com",
});

axios.interceptors.request.use((config) => {
  const noTokens = ["/post/all_posts", "/post/single", "/admin/login"];
  noTokens.forEach((route) => {
    if (!config.url.includes(route)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  });
  config.headers["Content-Type"] = "application/json";
  return config;
});
axios.interceptors.response.use((res) => {
  if (res.status === 401) window.location.href = "/dashboardLogin";
  return res;
});
export default axios;
