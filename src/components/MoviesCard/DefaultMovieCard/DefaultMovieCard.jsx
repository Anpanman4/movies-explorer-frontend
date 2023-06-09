import React from "react";

import MoviesCard from "../MoviesCard";

import checkMark from '../../../images/check-mark.svg'

function DefaultMovieCard ({
  card,
  isSaved,
}) {
  console.log(card)
  return (
    <MoviesCard
      card={card}
      isSaved={isSaved}
    >
      {card.add
        ? <button className="movie__button movie__button_added" type="button">
            <img src={checkMark} alt="Галочка" />
          </button>
        : <button className="movie__button" type="button">Сохранить</button>
      }
    </MoviesCard>
  )
}

export default DefaultMovieCard;
