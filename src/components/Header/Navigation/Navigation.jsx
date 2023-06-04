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
                {location.pathname === "/"
                ? <div className="navigation__link-active"></div>
                : ""
                }
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="navigation__link">
                Фильмы
                {location.pathname === "/movies"
                ? <div className="navigation__link-active"></div>
                : ""
                }
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="navigation__link">
                Сохранённые фильмы
                {location.pathname === "/saved-movies"
                ? <div className="navigation__link-active"></div>
                : ""
                }
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
