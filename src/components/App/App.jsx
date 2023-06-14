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
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenPopupInfo, setIsOpenPopupInfo] = useState(false);

  const closeAllPopups = () => {
    setIsOpenPopupInfo(false)
  }

  const saveCard = (film) => {
    api.createFilm(film)
      .then((data) => {
        setSavedCards([
          ...savedCards,
          data
        ])
      })
      .catch((err) => console.log(err))
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
      .catch((err) => console.log(err))
  }

  const searchMoviesByKeyword = (movies, keyword) => {
    let foundMovies = [];

    movies.forEach((movie) => {
      if (movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        if (isShortMovie) {
          movie.duration <= 40 && foundMovies.push(movie);
        } else {
          foundMovies.push(movie);
        }
      }
    })
    return foundMovies;
  }

  const searchCards = (keyword) => {
    keyword = keyword ? keyword : "";
    setIsLoading(true);

    const result = searchMoviesByKeyword(allMovies, keyword);
    if (result.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setCurrentCards(result);
      localStorage.setItem("cards", JSON.stringify(result))
    }
    localStorage.setItem("keyword", keyword);
    localStorage.setItem("isShort", isShortMovie)

    setIsSearch(true);
    setIsLoading(false);
  }

  const searchSaveCards = (keyword) => {
    setIsLoading(true);
    const result = searchMoviesByKeyword(savedCards, keyword);
    setSavedCards(result);
    setIsSearch(true);
    setIsLoading(false);
  }

  const handleRegister = (userData) => {
    auth.register(userData)
      .then(() => {
        handleLogin({
          email: userData.email,
          password: userData.password,
        });
      })
      .catch((err) => {
        console.log(err)
        setIsOpenPopupInfo(true);
        setIsSuccess(false);
      })
  }

  const handleLogin = (userData, setIsReadyForSubmit) => {
    auth.login(userData)
      .then((data) => {
        api.setHeaders(data.token);
        checkToken();
        setIsReadyForSubmit(false);
      })
      .catch((err) => console.log(err))
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
            location.pathname === "/signin" || location.pathname === "/signup" ? navigate("/movies") : navigate(location.pathname);
          }
        })
        .catch((err) => console.log(err))
    }
  }

  const logOut = () => {
    setCurrentUser({
      _id: '',
      name: '',
      email: '',
    });
    api.setHeaders("");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    if (isLoggedIn) {
      getMovies()
        .then((data) => setAllMovies(data))
      api.getFilms()
        .then((cards) => {
          setSavedCards(cards.data)
          const savedCards = JSON.parse(localStorage.getItem("cards"));
          if (savedCards) {
            setCurrentCards(savedCards);
            setIsSearch(true);
            setIsEmpty(false);
          }
        })
        .catch((err) => console.log(err))
      setIsShortMovie(JSON.parse(localStorage.getItem("isShort")))
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (currentCards.length !== 0) {
      const keyword = localStorage.getItem('keyword') === null ? "" : localStorage.getItem('keyword')
      const result = searchMoviesByKeyword(allMovies, keyword)
      setCurrentCards(result)
      localStorage.setItem("cards", JSON.stringify(result))
    }
  }, [isShortMovie])

  useEffect(() => {
    checkToken();
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
                isSearch={isSearch}
                currentCards={currentCards}
                isLoading={isLoading}
                searchCards={searchCards}
                isShortMovie={isShortMovie}
                setIsShortMovie={setIsShortMovie}
                saveCard={saveCard}
                isEmpty={isEmpty}
                deleteCard={deleteCard}
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
                searchCards={searchSaveCards}
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
                setIsOpenPopupInfo={setIsOpenPopupInfo}
                logOut={logOut}
                isLoggedIn={isLoggedIn}
                setCurrentUser={setCurrentUser}
                setIsSuccess={setIsSuccess}
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

        <InfoTooltip
          isOpened={isOpenPopupInfo}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
