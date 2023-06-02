import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import NotFound from '../NotFound/NotFound'

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          exact path='/'
          element={
            <Main />
          }
        />
        <Route
          exact path='/movies'
          element={
            <Movies />
          }
        />
        <Route
          exact path='/saved-movies'
          element={
            <SavedMovies />
          }
        />
        <Route
          exact path='/profile'
        />
        <Route
          path='*'
          element={
            <NotFound />
          }
        />
      </Routes>
    </>
  );
}

export default App;
