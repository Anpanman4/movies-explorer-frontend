import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import './Navigation.css'

import icon from '../../../images/profile-icon.svg'

function Navigation({ handleClose }) {
  const navigate = useNavigate();

  return (
    <div className="navigation__overlay">
      <section className="navigation">
        <button onClick={handleClose} className="navigation__close-button" type="button" />
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
        <button className="navigation__profile" type="button" onClick={() => navigate("/profile")}>
          Аккаунт
          <img className="navigation__profile-icon" src={icon} alt="Профиль" />
        </button>
      </section>
    </div>
  )
}

export default Navigation;
