import React, { useEffect, useState } from "react";

import Sign from "../Sign"

import { reqForEmail } from "../../../utils/const";

function Login ({
  handleLogin,
}) {
  const [submitData, setSubmitData] = useState({
    email: "",
    password: "",
  });
  const [ isReadyForSubmit, setIsReadyForSubmit ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmitData({
      ...submitData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(submitData)
      setSubmitData({
        email: "",
        password: "",
      });
      setIsReadyForSubmit(false);
  }

  useEffect(() => {
    if (reqForEmail.test(submitData.email) && submitData.password) {
      setIsReadyForSubmit(true);
    } else {
      setIsReadyForSubmit(false);
    }
  }, [ submitData ])

  return(
    <Sign
      title="Рады видеть!"
      buttonTitle="Войти"
      preLinkText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      formName="login-form"
      handleSubmit={handleSubmit}
      isReadyForSubmit={isReadyForSubmit}
    >
      <label className="sign__label">
        E-mail
        <input className="sign__input" placeholder="Почта" name="email" type="email" id="email" required minLength="2" maxLength="30" onChange={handleChange} />
      </label>
      <label className="sign__label">
        Пароль
        <input className="sign__input" placeholder="Пароль" name="password" type="password" id="password" required minLength="2" maxLength="30" onChange={handleChange} />
      </label>
      {isReadyForSubmit
        ? ""
        : <span className="sign__error">Что-то пошло не так...</span>
      }
    </Sign>
  )
}

export default Login
