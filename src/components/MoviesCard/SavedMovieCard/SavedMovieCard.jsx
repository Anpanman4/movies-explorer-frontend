import React from "react";

import MoviesCard from "../MoviesCard";

import remove from '../../../images/remove.svg';

function SavedMovieCard ({
  card,
  isSaved,
  deleteCard,
}) {
  const handleDelete = () => {
    deleteCard(card._id);
  }

  return (
    <MoviesCard
      card={card}
      isSaved={isSaved}
    >
      <button className="movie__button" type="button" onClick={handleDelete}>
        <img src={remove} alt="Удалить" />
      </button>
    </MoviesCard>
  )
}

export default SavedMovieCard;
