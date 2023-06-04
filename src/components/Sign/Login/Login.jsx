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
      formName="login-form"
    >
      <label className="sign__label">
        E-mail
        <input className="sign__input" placeholder="Почта" name="email" type="email" id="email" required minLength="2" maxLength="30" />
      </label>
      <label className="sign__label">
        Пароль
        <input className="sign__input" placeholder="Пароль" name="password" type="password" id="password" required minLength="2" maxLength="30" />
      </label>
      <span className="sign__error">Что-то пошло не так...</span>
    </Sign>
  )
}

export default Login
