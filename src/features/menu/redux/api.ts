import { axiosBaseQuery } from "@/app/utils/http/axios-base-query";
import { createApi } from "@reduxjs/toolkit/query";

export const menusApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: "" }),

  reducerPath: "menusApi",

  keepUnusedDataFor: 60,

  tagTypes: ["Menus"],

  endpoints: (builder) => ({
    // GET: Categrios
    getProductCategories: builder.query<any, any>({
      query: () => ({
        url: "products/categories",
        method: "GET",
      }),

      providesTags: ["Menus"],
    }),

    // GET: Products
    getProducts: builder.query<any, any>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),

      //
    }),
  }),
});
