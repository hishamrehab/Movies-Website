import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material';
import { useGetActorsDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import useStyles from "./styles"
import { MovieList } from "../MovieList/MovieList"

const Actors = () => {
    const classes = useStyles();
    const { id } = useParams();
    const { data, isFetching, error } = useGetActorsDetailsQuery(id);
    const page = 1;
    const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
    const navigate = useNavigate();


    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size="8rem" />
            </Box>
        )
    }


    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button startIcon={<ArrowBack />} onClick={() => { navigate(-1) }} color='primary'></Button>
            </Box>
        )
    }

    return (
        <div className={classes.actorsContainer}>
            <Grid container spacing={3}>
                <Grid item lg={5} xl={4}>
                    <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt={data.name} />
                </Grid>
                <Grid item lg={7} xl={8} style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}>
                    <Typography variant='h5' getterButton>
                        {data?.name}
                    </Typography>
                    <Typography variant='body2' getterButton align='justify' paragraph>
                        Born: {new Date(data?.birthday).toDateString()}
                    </Typography>
                    <Typography variant='body1' getterButton align='justify' paragraph>
                        Born: {data?.biography || 'Sorry no biography yet ...'}
                    </Typography>
                    <Box marginTop="2rem" display="flex" justifyContent="space-around">

                        <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>
                            IMDB
                        </Button>
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color='primary'>
                            back
                        </Button>

                    </Box>
                </Grid>
            </Grid>
            <Box margin='2rem 0'>
                <Typography variant='h3' gutterBottom align='center'>Movies</Typography>
                {movies && <MovieList movies={movies} numberOfMovies={12} />}
            </Box>
        </div>
    )
}

export default Actors
