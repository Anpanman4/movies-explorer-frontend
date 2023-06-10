import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css'
import auth from "../../utils/AuthApi";
import api from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi"

import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Sign/Login/Login'
import Register from '../Sign/Register/Register'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });
  const [allCards, setAllCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [savedCards, setSavedCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const saveCard = (film) => {
    api.createFilm(film)
      .then((data) => {
        setSavedCards([
          ...savedCards,
          data
        ])
      })
  }

  const deleteCard = (id) => {
    api.deleteFilm(id)
      .then((data) => {
        const newArr = savedCards.filter((card) => {
          if (!(card._id === data._id)) {
            return card;
          }
        });
        setSavedCards(newArr);
      })
  }

  const searchCards = (keyword) => {
    setIsSearch(true)
    setIsLoading(true);
    const arr = location.pathname === "/movies" ? allCards : savedCards;
    const func = location.pathname === "/movies" ? setCurrentCards : setSavedCards;
    const result = arr.filter((card) => {
      if (card.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        if (isShortMovie) {
          if (card.duration <= 40) return card
        } else {
          return card
        }
      };
    });
    setIsLoading(false);
    if (result.length === 0) {
      console.log('aga')
    }
    func(result);
  }

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

  const logOut = () => {
    api.setHeaders("")
    localStorage.removeItem("JWT")
    navigate("/")
    window.location.reload();
  }

  useEffect(() => {
    if (isLoggedIn) {
      getMovies()
        .then((cards) => setAllCards(cards))
      api.getFilms()
        .then((cards) => {
          setSavedCards(cards.data)
        })
    }
  }, [isLoggedIn])

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={{isLoggedIn, currentUser, savedCards}}>
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
                isLoading={isLoading}
                currentCards={currentCards}
                searchCards={searchCards}
                isShortMovie={isShortMovie}
                setIsShortMovie={setIsShortMovie}
                saveCard={saveCard}
                deleteCard={deleteCard}
                isSearch={isSearch}
                component={Movies}
              />
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                savedCards={savedCards}
                searchCards={searchCards}
                isShortMovie={isShortMovie}
                setIsShortMovie={setIsShortMovie}
                deleteCard={deleteCard}
                component={SavedMovies}
              />
            }
          />
          <Route
            exact path='/profile'
            element={
              <ProtectedRoute
                logOut={logOut}
                isLoggedIn={isLoggedIn}
                setCurrentUser={setCurrentUser}
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
