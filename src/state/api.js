import axios from "axios";
export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 1000 * 45,
  timeoutErrorMessage: "Server refused to Connect please try again !!",
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem("acc")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("acc")).token
    }`;
  }
  if (localStorage.getItem("client")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("client")).token
    }`;
  }
  return req;
});

export const alertErr = (err) => {
  if (err?.response?.data?.message) {
    alert(err?.response?.data?.message);
  } else if (err?.message) {
    alert(err?.message);
  } else {
    alert("Something went wrong!");
  }
};
