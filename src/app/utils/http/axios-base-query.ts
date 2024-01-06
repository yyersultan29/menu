import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
// import { IError } from './utils/errors';
import { AxiosRequestConfig } from "axios";
import { axios } from "./get-axios";
import { IAxiosError } from "./types";

interface IAxiosBaseQuery {
  baseUrl: string;
}

export interface IAxiosBaseQueryError {
  status?: number;
  data?: any;
}

export const axiosBaseQuery =
  ({
    baseUrl,
  }: IAxiosBaseQuery): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    IAxiosBaseQueryError
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      } as AxiosRequestConfig);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as IAxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
