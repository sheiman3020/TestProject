import axiosInstance from "@/axios";
const BaseUrl = "https://newsapi.org";
export default {
  topheadlines(params) {
    return axiosInstance({
      url: `${BaseUrl}/v2/top-headlines`,
      method: "GET",
      params: params,
    });
  },
  everything(params) {
    return axiosInstance({
      url: `${BaseUrl}/v2/everything`,
      method: "GET",
      params: params,
    });
  },
  sources(params) {
    return axiosInstance({
      url: `${BaseUrl}/v2/top-headlines/sources`,
      method: "GET",
      params: params,
    });
  },
};
