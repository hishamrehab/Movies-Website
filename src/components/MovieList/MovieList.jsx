import React from 'react'
import { Grid } from '@mui/material';
import useStyles from "./styles";
import Movie from '../Movie/Movie';

export const MovieList = ({ movies, i, numberOfMovies }) => {
    const classes = useStyles();

    console.log(movies);
    return (
        <Grid container className={classes.moviesContainer}>
            {movies.results.slice(0, numberOfMovies).map((movie) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    )
}


