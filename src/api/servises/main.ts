import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IClient, ITariffs, IClientTypes } from "@/types";

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
    getClientTypes: builder.query<IClientTypes[], void>({
      query: () => ({
        url: `/client_types`,
        method: "GET",
      }),
    }),
  }),
});
