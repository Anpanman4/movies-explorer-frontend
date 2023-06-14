import React, { useContext, useState } from "react";

import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import MoviesCard from "../MoviesCard";

import checkMark from '../../../images/check-mark.svg'

function DefaultMovieCard ({
  card,
  saveCard,
  isSaved,
  deleteCard,
}) {
  const { savedCards } = useContext(CurrentUserContext)
  const [ isAdded, setIsAdded] = useState(savedCards.map((card) => card.movieId).includes(card.id))

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAdded(true);

    saveCard(card);
  }

  const handleDelete = () => {
    setIsAdded(false);
    const id = savedCards.filter((movie) => {
      if (movie.movieId === card.id) return movie._id
    })
    deleteCard(id[0]._id);
  }

  return (
    <MoviesCard
      card={card}
      isSaved={isSaved}
    >
      {isAdded
        ? <button className="movie__button movie__button_added" type="button" onClick={handleDelete}>
            <img src={checkMark} alt="Галочка" />
          </button>
        : <button className="movie__button" type="button" onClick={handleSubmit}>Сохранить</button>
      }
    </MoviesCard>
  )
}

export default DefaultMovieCard;
