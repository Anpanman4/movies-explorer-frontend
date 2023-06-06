import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import './Navigation.css'

import icon from '../../../images/profile-icon.svg'

function Navigation({ handleClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="navigation">
      <div className="navigation__overlay">
        <button onClick={handleClose} className="navigation__close-button" type="button" />
        <nav>
          <ul className="navigation__container">
            <li>
              <NavLink to="/" className="navigation__link">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={`navigation__link ${location.pathname === "/movies" && "navigation__link_active"}`}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className={`navigation__link ${location.pathname === "/saved-movies" && "navigation__link_active"}`}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="navigation__profile" type="button" onClick={() => navigate("/profile")}>
          Аккаунт
          <img className="navigation__profile-icon" src={icon} alt="Профиль" />
        </button>
      </div>
    </section>
  )
}

export default Navigation;
