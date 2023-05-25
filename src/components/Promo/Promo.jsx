import React from "react";

import './Promo.css'

import logo from '../../images/logo.svg'
import design from '../../images/design.svg'

function Promo() {
  return (
    <>
      <section className="promo">
        <div className="promo__header">
          <img src={logo} alt="Логотип" className="promo__logo" />
          <ul className="promo__button-container">
            <li className="promo__register">Регистрация</li>
            <li className="promo__login">Войти</li>
          </ul>
        </div>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={design} alt="Узор" className="promo__design" />
      </section>
    </>
  );
}

export default Promo;
