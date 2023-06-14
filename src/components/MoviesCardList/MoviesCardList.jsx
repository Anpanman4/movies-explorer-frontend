import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";
import More from "../More/More"
import Preloader from "../Preloader/Preloader";

import {
  TABLETRESIZE,
  MOBILERESIZE,
  DEFAULTNUMBERSOFCARDSFULL,
  DEFAULTNUMBERSOFCARDSTABLET,
  DEFAULTNUMBERSOFCARDSMOBILE,
  DEFAULTNUMBERSOFCARDSTOADDFULL,
  DEFAULTNUMBERSOFCARDSTOADDTABLET,
  DEFAULTNUMBERSOFCARDSTOADDMOBILE,
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
    if (size < MOBILERESIZE) {
      return DEFAULTNUMBERSOFCARDSMOBILE;
    } else if (size < TABLETRESIZE) {
      return DEFAULTNUMBERSOFCARDSTABLET;
    } else {
      return DEFAULTNUMBERSOFCARDSFULL;
    }
  })
  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < MOBILERESIZE) {
      return DEFAULTNUMBERSOFCARDSTOADDMOBILE;
    } else if (size < TABLETRESIZE) {
      return DEFAULTNUMBERSOFCARDSTOADDTABLET;
    } else {
      return DEFAULTNUMBERSOFCARDSTOADDFULL;
    }
  })

  const handleResize = () =>{
    const size = window.innerWidth;
    if (size < MOBILERESIZE) {
      setInitialCardsAmount(DEFAULTNUMBERSOFCARDSMOBILE);
      setAddMoreCardsAmount(DEFAULTNUMBERSOFCARDSTOADDMOBILE);
    } else if (size < TABLETRESIZE) {
      setInitialCardsAmount(DEFAULTNUMBERSOFCARDSTABLET);
      setAddMoreCardsAmount(DEFAULTNUMBERSOFCARDSTOADDTABLET);
    } else {
      setInitialCardsAmount(DEFAULTNUMBERSOFCARDSFULL);
      setAddMoreCardsAmount(DEFAULTNUMBERSOFCARDSTOADDFULL);
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
