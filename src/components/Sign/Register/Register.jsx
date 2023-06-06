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
      formName="register-form"
    >
      <label className="sign__label">
        Имя
        <input className="sign__input" placeholder="Имя" name="name" type="text" id="name" required minLength="2" maxLength="30" />
      </label>
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

export default Register
