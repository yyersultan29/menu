import Axios from "axios";
import {
  addAuthTokenInterceptors,
  errorResponseInterceptor,
} from "./interceptors";

const baseUrl = process.env.BASE_URL;

const NETWORK_TIMEOUT = 70_000;

const createAxios = (baseUrl: string) => {
  const axios = Axios.create({
    baseURL: `${baseUrl}`,
    responseType: "json",
    timeout: NETWORK_TIMEOUT,
    timeoutErrorMessage: "Internet connection low ",
  });

  axios.interceptors.request.use(addAuthTokenInterceptors);

  axios.interceptors.response.use((response) => {
    return response;
  }, errorResponseInterceptor(axios));

  return axios;
};

export const axios = createAxios(String(baseUrl));
