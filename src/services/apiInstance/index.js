import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    apiInstance.defaults.headers.common.Authorization = token;
  } else {
    delete apiInstance.defaults.headers.common.Authorization;
  }
};

export default apiInstance;
