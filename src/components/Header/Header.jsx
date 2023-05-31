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
        <div className="header__button-container">
          <Link to="/signin" className="header__register">Регистрация</Link>
          <Link to="/signup" className="header__login">Войти</Link>
        </div>
      </header>
      ) : (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <div className="header__links">
          <NavLink to="/movies" className="header__link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__link">
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="header__profile">
          <p className="header__profile-text">Аккаунт</p>
          <img className="header__profile-icon" src={icon} alt="Профиль" />
        </Link>
        <button className="header__burger" onClick={handleOpen} />
        {isClicked
          ? <Navigation handleClose={handleClose}>
              <Link to="/profile" className="header__profile">
                <p className="header__profile-text">Аккаунт</p>
                <img className="header__profile-icon" src={icon} alt="Профиль" />
              </Link>
            </Navigation>
          : ""
        }
      </header>
      )}
    </>
  )
}

export default Header
