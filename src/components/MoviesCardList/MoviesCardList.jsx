import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";
import More from "../More/More"
import Preloader from "../Preloader/Preloader";

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
    if (size < 545) {
      return 5;
    } else if (size < 1096) {
      return 8;
    } else {
      return 12;
    }
  })
  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < 684) {
      return 5;
    } else if (size < 1096) {
      return 2;
    } else {
      return 3;
    }
  })

  const handleResize = () =>{
    const size = window.innerWidth;
    if (size < 684) {
      setInitialCardsAmount(5);
      setAddMoreCardsAmount(5);
    } else if (size < 1096) {
      setInitialCardsAmount(8);
      setAddMoreCardsAmount(2);
    } else {
      setInitialCardsAmount(12);
      setAddMoreCardsAmount(3);
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
