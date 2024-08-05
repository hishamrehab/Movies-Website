import React from 'react'
import { Grid } from '@mui/material';
import useStyles from "./styles";
import Movie from '../Movie/Movie';

export const MovieList = ({ movies, i, numberOfMovies, excludeFirst }) => {
    const classes = useStyles();
    const startFrom = excludeFirst ? 1 : 0;

    console.log(movies);
    return (
        <Grid container className={classes.moviesContainer}>
            {movies.results.slice(startFrom, numberOfMovies).map((movie) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    )
}


