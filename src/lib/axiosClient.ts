import { redirect } from "next/navigation";

import axios, { AxiosError, AxiosRequestConfig } from "axios";

import Urls from "@/constants/urls";
import envVars from "@/utils/env";

// API Instance
export const apiInstance = axios.create({
  baseURL: envVars.apiUri,
});

function insertAuthToken(axiosConfig: AxiosRequestConfig) {
  if (envVars.isServerSide) {
    return axiosConfig;
  }

  if (!axiosConfig.headers) {
    axiosConfig.headers = {};
  }

  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    axiosConfig.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return axiosConfig;
}

// ToDo
const setErrorInterceptor = async (error: AxiosError) => {
  // const originalConfig = error.config;
  if (error.response) {
    if (error.response.status === 401) {
      redirect(Urls.Login);
      // try {
      //   const tokens = getSessionTokens();
      //   if (tokens) {
      //   const response = await axios({
      //     baseURL: envVars.apiUri,
      //     url: `/v1/refresh_token`,
      //     method: 'POST',
      //     data: {
      //       refresh_token: tokens.refresh_token,
      //     },
      //   });
      //   const accessToken = response.data.access_token;
      //   if (accessToken) {
      //     setSessionTokens({
      //       ...tokens,
      //       access_token: accessToken,
      //     });
      //   }
      //   // @ts-ignore
      //   originalConfig.headers['Authorization'] = `Bearer ${accessToken}`;
      // }
      // return apiInstance(originalConfig);
      // } catch (_error: any) {
      //   if (_error.response && _error.response.data) {
      //     return Promise.reject(_error.response.data);
      //   }
      //   return Promise.reject(_error);
      // }
    }
  }
  return Promise.reject(error);
};

// @ts-ignore
apiInstance.interceptors.request.use(insertAuthToken);

apiInstance.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError) => setErrorInterceptor(error)
);
