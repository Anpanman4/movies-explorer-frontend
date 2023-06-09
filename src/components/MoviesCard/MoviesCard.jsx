import React from "react";

import './MoviesCard.css'

function MoviesCard ({
  card,
  isSaved,
  children,
}) {
  return (
    <>
      <li className="movie">
        <div className="movie__container">
          <h2 className={`movie__title ${isSaved ? "movie__title_mobile" : ""}`}>{card.nameRU}</h2>
          <p className={`movie__time ${isSaved ? "movie__time_mobile" : ""}`}>{`${card.duration} минут`}</p>
        </div>
        <img className="movie__img" src={isSaved ? card.image : `https://api.nomoreparties.co${card.image.url}`} alt={`Изображение фильма${card.nameRU}`} />
        {children}
      </li>
    </>
  )
}

export default MoviesCard
