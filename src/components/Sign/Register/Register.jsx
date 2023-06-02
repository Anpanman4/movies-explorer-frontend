import React from "react";

import Sign from "../Sign"

function Register () {
  return(
    <Sign
      title="Добро пожаловать!"
      buttonTitle="Зарегистрироваться"
      preLinkText="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
    >
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

export default Register
