import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from "../../features/auth"
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import useStyles from "./styles";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from '../RatedCards/RatedCards';

const Profile = () => {
    const { user } = useSelector(userSelector);


    const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
    const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });



    useEffect(() => {
        refetchFavorites();
        refetchWatchlisted();
    }, []);


    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    const classes = useStyles();

    return (
        <Box className={classes.ProfilePage}>
            <Box display="flex" justifyContent="space-between" >
                <Typography variant='h4'>
                    My Profile
                </Typography>
                <Button color='inherit' onClick={logout}>Logout &nbsp; <ExitToApp /></Button>
            </Box>
            {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
                <Typography variant='h6' >Add favorites or watchList some movies to see them here!</Typography>
            ) : (<Box>
                <RatedCards title="favorite Movies" data={favoriteMovies} />
                <RatedCards title="watchlist" data={watchlistMovies} />
            </Box>)}
        </Box>
    )
}

export default Profile
