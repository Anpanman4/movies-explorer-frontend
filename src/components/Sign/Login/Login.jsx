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
      <label className="sign__label">
        E-mail
        <input className="sign__input" placeholder="Почта" type="text" id="email" />
      </label>
      <label className="sign__label">
        Пароль
        <input className="sign__input" placeholder="Пароль" type="password" id="password" />
      </label>
      <span className="sign__error">Что-то пошло не так...</span>
    </Sign>
  )
}

export default Login
