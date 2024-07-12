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
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get the movies
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        //* Get Movies by Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName == "string") {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName == "number") {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
