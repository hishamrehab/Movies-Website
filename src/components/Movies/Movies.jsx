import React, { useState, useEffect } from 'react'
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../MovieList/MovieList';
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Movies = () => {
    const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName });
    const { generaOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);


    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress size="4rem" />
            </Box>
        )
    }

    if (!data.results.length) {
        return (
            <Box display="flex" alignItems="center" mt="20px">
                <Typography variant='h4'>
                    No Movies that match that name.
                    <br />
                    Please search for something else.
                </Typography>

            </Box>
        )
    }


    if (error) return 'An error has occured.';

    return (
        <div>
            <MovieList movies={data} />
        </div>
    )
}

export default Movies
