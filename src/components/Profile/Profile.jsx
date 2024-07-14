import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from "../../features/auth"
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import useStyles from "./styles";



const logout = () => {
    localStorage.clear();
    window.location.href = "/";
}


const favoriteMovies = [];

const Profile = () => {
    const classes = useStyles();
    const { user } = useSelector(userSelector);
    console.log(user);
    return (
        <Box className={classes.ProfilePage}>
            <Box display="flex" justifyContent="space-between" >
                <Typography variant='h4'>
                    My Profile
                </Typography>
                <Button color='inherit' onClick={logout}>Logout &nbsp; <ExitToApp /></Button>
            </Box>
            {!favoriteMovies.length ? (
                <Typography variant='h6' >Add favorites or watchList some movies to see them here!</Typography>
            ) : (<Box>
                FAVORITE MOVIES
            </Box>)}
        </Box>
    )
}

export default Profile
