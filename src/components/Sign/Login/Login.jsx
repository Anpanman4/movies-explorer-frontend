import React from "react";

import Sign from "../Sign"

function Login () {
  return(
    <Sign
      title="Рады видеть!"
      buttonTitle="Войти"
      preLinkText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
    >
      <label className="sign__label" for="name">
        Имя
        <input className="sign__input" placeholder="Имя" type="text" id="name" />
      </label>
      <label className="sign__label" for="email">
        E-mail
        <input className="sign__input" placeholder="Почта" type="text" id="email" />
      </label>
      <label className="sign__label" for="password">
        Пароль
        <input className="sign__input" placeholder="Пароль" type="text" id="password" />
        <span className="sign__error">Что-то пошло не так...</span>
      </label>
    </Sign>
  )
}

export default Login
