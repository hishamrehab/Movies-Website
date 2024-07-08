import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInformation, NavBar, Profile, Movies } from "./components/index"
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
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}



export default App

