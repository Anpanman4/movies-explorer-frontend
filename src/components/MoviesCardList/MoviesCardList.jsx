import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";
import More from "../More/More"
import Preloader from "../Preloader/Preloader";

import {
  tabletResize,
  mobileResize,
  defaultNumbersOfCardsFull,
  defaultNumbersOfCardsTablet,
  defaultNumbersOfCardsMobile,
  defaultNumbersOfCardsToAddFull,
  defaultNumbersOfCardsToAddTablet,
  defaultNumbersOfCardsToAddMobile,
} from '../../utils/const';

import './MoviesCardList.css'

function MoviesCardList ({
  isLoading,
  currentCards,
  isSaved,
  saveCard,
  isSearch,
  isEmpty,
  deleteCard,
}) {
  const location = useLocation();
  const [initialCardsAmount, setInitialCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < mobileResize) {
      return defaultNumbersOfCardsMobile;
    } else if (size < tabletResize) {
      return defaultNumbersOfCardsTablet;
    } else {
      return defaultNumbersOfCardsFull;
    }
  })
  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < mobileResize) {
      return defaultNumbersOfCardsToAddMobile;
    } else if (size < tabletResize) {
      return defaultNumbersOfCardsToAddTablet;
    } else {
      return defaultNumbersOfCardsToAddFull;
    }
  })

  const handleResize = () =>{
    const size = window.innerWidth;
    if (size < mobileResize) {
      setInitialCardsAmount(defaultNumbersOfCardsMobile);
      setAddMoreCardsAmount(defaultNumbersOfCardsToAddMobile);
    } else if (size < tabletResize) {
      setInitialCardsAmount(defaultNumbersOfCardsTablet);
      setAddMoreCardsAmount(defaultNumbersOfCardsToAddTablet);
    } else {
      setInitialCardsAmount(defaultNumbersOfCardsFull);
      setAddMoreCardsAmount(defaultNumbersOfCardsToAddFull);
    }
  }

  const handleAddAmount = () => {
    setInitialCardsAmount(prev => prev + addCardsAmount);
  }

  const renderedMovies = currentCards.slice(0, initialCardsAmount);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <>
    {isSearch || location.pathname === "/saved-movies"
    ? <section>
        {isLoading
          ? <Preloader />
          : isEmpty
            ? <ul className="movie-list">
                <span className="movie-list__title">Ничего не найдено</span>
              </ul>
            : <ul className="movie-list">
                {isSaved
                ? renderedMovies.map((card) => (
                    <SavedMovieCard
                      key={card._id}
                      card={card}
                      isSaved={isSaved}
                      deleteCard={deleteCard}
                    />
                  ))
                : renderedMovies.map((card) => (
                    <DefaultMovieCard
                      key={card.id}
                      saveCard={saveCard}
                      card={card}
                      isSaved={isSaved}
                      deleteCard={deleteCard}
                    />
                ))
                }
              </ul>
        }
        { currentCards.length > initialCardsAmount
        ? <More
          handleAddAmount={handleAddAmount}
        />
          : ""
        }
      </section>
    : ""}
    </>
  )
}

export default MoviesCardList
