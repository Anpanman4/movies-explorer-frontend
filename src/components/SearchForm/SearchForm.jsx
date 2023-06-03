import React from "react";

import './SearchForm.css'

import search from "../../images/search.svg"

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm () {
  return (
    <>
      <section className="search-form">
        <form name="search-form" className="search-form__container">
          <div className="search-form__input-container">
            <img className="search-form__img" src={search} alt="Поиск" />
            <input className="search-form__input" name="filmName" type="text" placeholder="Фильм" />
            <button className="search-form__search-button">Найти</button>
          </div>
          <div className="search-form__film-container">
            <FilterCheckbox />
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm
