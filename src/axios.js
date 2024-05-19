import axios from "axios";
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// You can add interceptors here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
