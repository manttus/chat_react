import axios from "axios";

export const api = {
  get: <T>(url: string, params?: object, headers?: object) =>
    axios.get<T>(url, {
      params,
      headers,
      withCredentials: true,
    }),
  post: <T, S>(url: string, body: object, headers?: object) =>
    axios.post<T, S>(url, body, {
      headers,
      withCredentials: true,
    }),
};
