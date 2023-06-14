import React, { useContext, useState } from "react";
import { useLocation, Link, NavLink, useNavigate } from "react-router-dom";
import './Header.css'

import logo from '../../images/logo.svg'
import icon from '../../images/profile-icon.svg'

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Navigation from "./Navigation/Navigation";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
  }

  const handleClose = () => {
    setIsClicked(false);
  }

  return (
    <>
      {!isLoggedIn ? (
      <header className="header header_color_blue">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <nav className="header__button-container">
          <button className="header__register" type="button" onClick={() => navigate("/signup")}>Регистрация</button>
          <button className="header__login" type="button" onClick={() => navigate("/signin")}>Войти</button>
        </nav>
      </header>
      ) : (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <nav>
          <ul className="header__links">
            <li>
              <NavLink
                to="/movies"
                className={`header__link ${location.pathname === '/movies' && "header__link_active"}`}>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className={`header__link ${location.pathname === '/saved-movies' && "header__link_active"}`}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="header__profile" type="button" onClick={() => navigate("/profile")}>
          Аккаунт
          <img className="header__profile-icon" src={icon} alt="Профиль" />
        </button>
        <button className="header__burger" onClick={handleOpen} type="button" />
        {isClicked
          ? <Navigation handleClose={handleClose} />
          : ""
        }
      </header>
      )}
    </>
  )
}

export default Header
