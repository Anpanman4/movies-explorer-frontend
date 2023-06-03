import React, { useState } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import './Header.css'

import logo from '../../images/logo.svg'
import icon from '../../images/profile-icon.svg'

import Navigation from "./Navigation/Navigation";

function Header() {
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
  }

  const handleClose = () => {
    setIsClicked(false);
  }

  return (
    <>
      {location.pathname === '/' ? (
      <header className="header header_color_blue">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <nav className="header__button-container">
          <Link to="/signup" className="header__register">Регистрация</Link>
          <Link to="/signin" className="header__login">Войти</Link>
        </nav>
      </header>
      ) : (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <nav className="header__links">
          <NavLink
            to="/movies"
            className={`header__link ${location.pathname === '/movies' && "header__link_active"}`}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={`header__link ${location.pathname === '/saved-movies' && "header__link_active"}`}>
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="header__profile">
          <p className="header__profile-text">Аккаунт</p>
          <img className="header__profile-icon" src={icon} alt="Профиль" />
        </Link>
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
