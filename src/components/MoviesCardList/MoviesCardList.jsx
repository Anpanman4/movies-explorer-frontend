import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

import './MoviesCardList.css'
import { arr } from '../../utils/const'

function MoviesCardList () {
  return (
    <section>
      <ul className="movie-list">
        {
          arr.map((card) => (
            <MoviesCard
              key={card._id}
              card={card}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default MoviesCardList
