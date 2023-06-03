import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css'

import Login from '../Sign/Login/Login'
import Register from '../Sign/Register/Register'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'

function App() {
  const [name, setName] = useState("Алексей")
  const [email, setEmail] = useState("anpanman@mail.ru")

  return (
    <>
      <Routes>
        <Route
          exact path='/signin'
          element={
            <Login />
          }
        />
        <Route
          exact path='/signup'
          element={
            <Register />
          }
        />
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
          element={
            <Profile
              name={name}
              email={email}
            />
          }
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
