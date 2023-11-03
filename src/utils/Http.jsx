import axios from "axios";
import { CookieStorage, CookiesKeys } from "./cookies";

const getToken = CookieStorage.get(CookiesKeys.AuthToken)
  ? CookieStorage.get(CookiesKeys.AuthToken)
  : "";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
  },
});

const httpbinar = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BINAR,
  timeout: 30000,
  headers: {
    accept: "application/json",
  },
});

httpbinar.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${getToken ? getToken : ""}`,
  };

  return config;
});

export { http, httpbinar };
