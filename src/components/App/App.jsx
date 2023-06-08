import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: ''
  });

  const handleRegister = (userData) => {
    auth.register(userData)
      .then(() => {
        handleLogin({
          email: userData.email,
          password: userData.password,
        });
      })
  }

  const handleLogin = (userData) => {
    auth.login(userData)
      .then((data) => {
        api.setHeaders(data.token);
        checkToken();
      })
  }

  const checkToken = () => {
    if (localStorage.getItem("JWT")) {
      api.getMe()
        .then((data) => {
          if (data) {
            setCurrentUser({
              _id: data._id,
              name: data.name,
              email: data.email,
            });
            setIsLoggedIn(true);
            navigate('/movies');
          }
        })
    }
  }

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact path='/signin'
            element={
              <Login
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            exact path='/signup'
            element={
              <Register
                handleRegister={handleRegister}
              />
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
