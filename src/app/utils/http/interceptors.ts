import {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import { getCredentials } from "../auth-utils";
import { TOKEN_KEY } from "@/constants";
import { IAxiosError } from "./types";

export const addAuthTokenInterceptors = async (config: AxiosRequestConfig) => {
  const creds = getCredentials();

  config.headers = {
    ...(creds ? { Authorization: `Bearer ${creds[TOKEN_KEY]}` } : {}),
    Accept: "application/json",
  };

  return config as InternalAxiosRequestConfig;
};

export const errorResponseInterceptor =
  (axios: AxiosInstance) => async (error: IAxiosError) => {
    const res = error.response;

    if (res.status === 401) {
      const currRequest = error.response.config;

      // reload Auth credentails

      return axios(currRequest);
    }

    const errorObj = res?.data ?? {};

    // TODO: make alert to show error message

    throw error;
  };
