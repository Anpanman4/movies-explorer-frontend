import React, { useState } from "react";

import './SearchForm.css'

import search from "../../images/search.svg"

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm ({
  searchCards,
  isShortMovie,
  setIsShortMovie,
}) {
  const [filmName, setFilmName] = useState("")

  const handleChange = (e) => {
    setFilmName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    searchCards(filmName);
  }

  return (
    <>
      <div className="search-form">
        <form name="search-form" className="search-form__container" noValidate onSubmit={handleSubmit}>
          <div className="search-form__input-container">
            <img className="search-form__img" src={search} alt="Поиск" />
            <input className="search-form__input" placeholder="Фильм" name="filmName" type="text" id="filmName" required minLength="2" maxLength="30" onChange={handleChange} />
            <button className="search-form__search-button" type="submit">Найти</button>
          </div>
          <div className="search-form__film-container">
            <FilterCheckbox
              isShortMovie={isShortMovie}
              setIsShortMovie={setIsShortMovie}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchForm
