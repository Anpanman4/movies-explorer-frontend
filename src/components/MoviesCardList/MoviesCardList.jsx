import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";
import More from "../More/More"
import Preloader from "../Preloader/Preloader";

import {
  TABLET_RESIZE,
  MOBILE_RESIZE,
  DEFAULT_NUMBERS_OF_CARDS_FULL,
  DEFAULT_NUMBERS_OF_CARDS_TABLET,
  DEFAULT_NUMBERS_OF_CARDS_MOBILE,
  DEFAULT_NUMBERS_OF_CARDS_TO_ADD_FULL,
  DEFAULT_NUMBERS_OF_CARDS_TO_ADD_TABLET,
  DEFAULT_NUMBERS_OF_CARDS_TO_ADD_MOBILE,
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
    if (size < MOBILE_RESIZE) {
      return DEFAULT_NUMBERS_OF_CARDS_MOBILE;
    } else if (size < TABLET_RESIZE) {
      return DEFAULT_NUMBERS_OF_CARDS_TABLET;
    } else {
      return DEFAULT_NUMBERS_OF_CARDS_FULL;
    }
  })
  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < MOBILE_RESIZE) {
      return DEFAULT_NUMBERS_OF_CARDS_TO_ADD_MOBILE;
    } else if (size < TABLET_RESIZE) {
      return DEFAULT_NUMBERS_OF_CARDS_TO_ADD_TABLET;
    } else {
      return DEFAULT_NUMBERS_OF_CARDS_TO_ADD_FULL;
    }
  })

  const handleResize = () =>{
    const size = window.innerWidth;
    if (size < MOBILE_RESIZE) {
      setInitialCardsAmount(DEFAULT_NUMBERS_OF_CARDS_MOBILE);
      setAddMoreCardsAmount(DEFAULT_NUMBERS_OF_CARDS_TO_ADD_MOBILE);
    } else if (size < TABLET_RESIZE) {
      setInitialCardsAmount(DEFAULT_NUMBERS_OF_CARDS_TABLET);
      setAddMoreCardsAmount(DEFAULT_NUMBERS_OF_CARDS_TO_ADD_TABLET);
    } else {
      setInitialCardsAmount(DEFAULT_NUMBERS_OF_CARDS_FULL);
      setAddMoreCardsAmount(DEFAULT_NUMBERS_OF_CARDS_TO_ADD_FULL);
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
