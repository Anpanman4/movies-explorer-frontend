import React, { useState } from "react";

import Sign from "../Sign"

function Register ({
  handleRegister,
}) {
  const [ submitData, setSubmitData ] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmitData({
      ...submitData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!submitData.name || !submitData.email || !submitData.password) {
      return
    }

    handleRegister(submitData)
    setSubmitData({
      name: "",
      email: "",
      password: "",
    })
  }

  return(
    <Sign
      title="Добро пожаловать!"
      buttonTitle="Зарегистрироваться"
      preLinkText="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      formName="register-form"
      handleSubmit={handleSubmit}
    >
      <label className="sign__label">
        Имя
        <input className="sign__input" placeholder="Имя" name="name" type="text" id="name" required minLength="2" maxLength="30" onChange={handleChange} />
      </label>
      <label className="sign__label">
        E-mail
        <input className="sign__input" placeholder="Почта" name="email" type="email" id="email" required minLength="2" maxLength="30" onChange={handleChange} />
      </label>
      <label className="sign__label">
        Пароль
        <input className="sign__input" placeholder="Пароль" name="password" type="password" id="password" required minLength="2" maxLength="30" onChange={handleChange} />
      </label>
      <span className="sign__error">Что-то пошло не так...</span>
    </Sign>
  )
}

export default Register
