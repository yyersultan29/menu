export interface IAxiosError extends Error {
  config: any;
  response: {
    status: number;
    data: any;
    config: any;
  };
}
