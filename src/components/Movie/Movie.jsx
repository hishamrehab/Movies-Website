import React from 'react'
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material'
import { Link } from 'react-router-dom'

import useStyles from "./styles"
const Movie = ({ movie, i }) => {
    const calsses = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={calsses.movie}>
            <Grow in key={i} timeout={1500}>
                <Link className={calsses.links} to={`/movie/${movie.id}`}>
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
                        className={calsses.image}
                        alt={movie.title} />

                    <Typography className={calsses.title} variant="h5">
                        {movie.title}
                    </Typography>
                    <Tooltip disableFocusListener title={`${movie.vote_average} /10`} >
                        <div>
                            <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                        </div>
                    </Tooltip>


                </Link>

            </Grow>



        </Grid >
    )
}

export default Movie
