import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css'

import auth from "../../utils/AuthApi";
import api from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi"

import ProtectedRoute from '../ProtectedRoute';
import Login from '../Sign/Login/Login'
import Register from '../Sign/Register/Register'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: ''
  });

  // auth.login("test1@mail.ru", "1234")

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                component={Movies}
              />
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                component={SavedMovies}
              />
            }
          />
          <Route
            exact path='/profile'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                component={Profile}
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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
