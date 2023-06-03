import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navigation.css'

import icon from '../../../images/profile-icon.svg'

function Navigation({ handleClose }) {
  return (
    <div className="navigation__overlay">
      <section className="navigation">
        <button onClick={handleClose} className="navigation__close-button" />
        <nav>
          <ul className="navigation__container">
            <li>
              <NavLink to="/" className="navigation__link">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
            </li>
          </ul>
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
