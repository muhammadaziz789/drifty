import axios from "axios";
import { QueryClient } from "react-query";
import { store } from "store/store";
import { logout } from "store/auth/auth.slice";
import { websiteActions } from "store/website/websiteSlice";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const errorHandler = (error) => {
  if (error && error.response) {
    if (error?.response?.data?.error.code === 401) {
      store.dispatch(logout());
      location.replace("/");
    }
  }

  return Promise.reject(error.response);
};

request.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => errorHandler(error)
);

request.interceptors.response.use((response) => {
  if (response.data?.error?.message) {
    store.dispatch(
      websiteActions.setAlertData({
        title: response.data?.error?.message,
        type: "error",
      })
    );
  }
  return response.data.data;
}, errorHandler);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
