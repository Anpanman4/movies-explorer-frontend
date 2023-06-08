import React from "react";
import { Link } from "react-router-dom";

import "./Sign.css"

import logo from '../../images/logo.svg'

function Sign ({
  title,
  buttonTitle,
  preLinkText,
  linkText,
  link,
  formName,
  handleSubmit,
  isReadyForSubmit,
  children,
}) {
  return (
    <main>
      <section className="sign">
        <Link to="/" className="sign__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h1 className="sign__title">{title}</h1>
        <form name={formName} className="sign__form" noValidate onSubmit={handleSubmit}>
          {children}
          <button
            className={`sign__button ${buttonTitle === "Войти" && "sign__button_login"} ${isReadyForSubmit ? "" : "sign__button_unactive"}`}
            type="submit"
            disabled={!isReadyForSubmit}
          >
            {buttonTitle}
          </button>
        </form>
        <p className="sign__link-text">
          {preLinkText}
          <Link to={link} className="sign__link">{linkText}</Link>
        </p>
      </section>
    </main>
  )
}

export default Sign
