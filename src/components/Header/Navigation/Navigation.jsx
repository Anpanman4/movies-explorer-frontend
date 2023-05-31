import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navigation.css'

import icon from '../../../images/profile-icon.svg'
import closeButton from "../../../images/close-button.svg"

function Navigation({ handleClose }) {
  return (
    <div className="navigation__overlay">
      <section className="navigation">
        <img src={closeButton} onClick={handleClose} alt="Закрыть" className="navigation__close-button" />
        <nav className="navigation__container">
          <NavLink to="/" className="navigation__link">Главная</NavLink>
          <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
        </nav>
        <Link to="/profile" className="navigation__profile">
          <p className="navigation__profile-text">Аккаунт</p>
          <img className="navigation__profile-icon" src={icon} alt="Профиль" />
        </Link>
      </section>
    </div>
  )
}

export default Navigation;
