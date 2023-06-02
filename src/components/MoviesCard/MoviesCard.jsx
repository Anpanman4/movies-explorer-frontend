import React from "react";

import { useLocation } from "react-router";

import './MoviesCard.css'

import checkMark from '../../images/check-mark.svg'
import remove from '../../images/remove.svg'

function MoviesCard ({ card }) {
  const location = useLocation();

  return (
    <>
    {location.pathname === "/saved-movies"
      ? <li className="movie">
        <div className="movie__container">
          <h3 className="movie__title">{card.name}</h3>
          <p className="movie__time">{card.time}</p>
        </div>
        <img className="movie__img" src={card.src} alt={`Изображение фильма${card.name}`} />
        <button className="movie__button">
          <img src={remove} alt="Удалить" />
        </button>
      </li>
      : <li className="movie">
        <div className="movie__container">
          <h3 className="movie__title">{card.name}</h3>
          <p className="movie__time">{card.time}</p>
        </div>
        <img className="movie__img" src={card.src} alt={`Изображение фильма${card.name}`} />
        {card.add
          ? <button className="movie__button">Сохранить</button>
          : <button className="movie__button movie__button_added">
              <img src={checkMark} alt="Галочка" />
            </button>
        }
      </li>
    }
    </>
  )
}

export default MoviesCard
