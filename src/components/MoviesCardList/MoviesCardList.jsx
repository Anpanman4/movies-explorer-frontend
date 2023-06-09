import React from "react";

import DefaultMovieCard from "../MoviesCard/DefaultMovieCard/DefaultMovieCard"
import SavedMovieCard from "../MoviesCard/SavedMovieCard/SavedMovieCard";

import './MoviesCardList.css'

function MoviesCardList ({
  currentCards,
  isSaved,
}) {
  return (
    <section>
      <ul className="movie-list">
        {isSaved
        ? currentCards.map((card) => (
            <SavedMovieCard
              key={card.id}
              card={card}
              isSaved={isSaved}
            />
          ))
        : currentCards.map((card) => (
            <DefaultMovieCard
              key={card.id}
              card={card}
              isSaved={isSaved}
            />
        ))
        }
      </ul>
    </section>
  )
}

export default MoviesCardList
