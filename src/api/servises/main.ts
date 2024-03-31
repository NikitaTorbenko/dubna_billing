import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IClient, ITariffs } from "@/types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://89.223.68.16/api",
  }),
  endpoints: (builder) => ({
    getClients: builder.query<IClient[], void>({
      query: () => ({
        url: `/clients`,
        method: "GET",
      }),
    }),
    getTariffs: builder.query<ITariffs[], void>({
      query: () => ({
        url: `/tariffs`,
        method: "GET",
      }),
    }),
  }),
});
