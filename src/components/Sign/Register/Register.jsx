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
      <label className="sign__label">
        Имя
        <input className="sign__input" placeholder="Имя" type="text" id="name" required min="2" max="30" />
      </label>
      <label className="sign__label">
        E-mail
        <input className="sign__input" placeholder="Почта" type="text" id="email" required min="2" max="30" />
      </label>
      <label className="sign__label">
        Пароль
        <input className="sign__input" placeholder="Пароль" type="password" id="password" required min="2" max="30" />
      </label>
      <span className="sign__error">Что-то пошло не так...</span>
    </Sign>
  )
}

export default Register
