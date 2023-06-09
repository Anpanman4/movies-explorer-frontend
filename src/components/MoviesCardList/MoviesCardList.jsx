import React from "react";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";
import Preloader from "../Preloader/Preloader";

import './MoviesCardList.css'

function MoviesCardList ({
  isLoading,
  currentCards,
  isSaved,
  saveCard,
  deleteCard,
}) {
  return (
    <section>
      {isLoading
        ? <Preloader />
        : <ul className="movie-list">
            {isSaved
            ? currentCards.map((card) => (
                <SavedMovieCard
                  key={card._id}
                  card={card}
                  isSaved={isSaved}
                  deleteCard={deleteCard}
                />
              ))
            : currentCards.map((card) => (
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
    </section>
  )
}

export default MoviesCardList
