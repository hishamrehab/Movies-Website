import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// 0aeca8b1291c3a641cadf8ba31b16c73

const tmdbApiKey = "0aeca8b1291c3a641cadf8ba31b16c73";
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
