import axios from "axios";
import { getAccesToken } from "../helpers/localStorageHelper";

const API_URL = "https://book-backendd.herokuapp.com/";
const TEXT_API = "http://localhost:5000/";

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    if (!config.url.endsWith("login")) {
      const AccesToken = getAccesToken();
      config.headers.Authorization = `beare ${AccesToken}`;
    }
    return config;
  },
  (error) => {
   return error
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default apiInstance;

