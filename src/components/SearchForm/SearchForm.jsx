import React, { useState } from "react";

import './SearchForm.css'

import search from "../../images/search.svg"
// import onButton from "../../images/on-button.svg"
// import offButton from "../../images/off-button.svg"

function SearchForm () {
  const [isButtonActive, setIsButtonActive] = useState(true);

  const changeStatus = () => {
    isButtonActive ? setIsButtonActive(false) : setIsButtonActive(true);
  }

  return (
    <>
      <section className="search-form">
        <form className="search-form__container">
          <div className="search-form__input-container">
            <img className="search-form__img" src={search} alt="Поиск" />
            <input className="search-form__input" type="text" placeholder="Фильм" />
            <button className="search-form__search-button">Найти</button>
          </div>
          <div className="search-form__film-container">
            { isButtonActive
              ? <input type="checkbox" className="search-form__status-button" onClick={changeStatus} />
              : <input type="checkbox" className="search-form__status-button" onClick={changeStatus} />
            }
            <p className="search-form__text">Короткометражки</p>
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm
