import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar"
import Movies from "../src/components/Movies/Movies"
import MovieInformation from "../src/components/MovieInformation/MovieInformation"
import Actors from "../src/components/Actors/Actors"
import Profile from "../src/components/Profile/Profile"

import useStyles from "./styles";
import { Link } from 'react-router-dom';



const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route index path='/' element={<Movies />} />
          <Route index path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}



export default App

