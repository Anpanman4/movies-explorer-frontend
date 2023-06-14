import React from "react";
import { useNavigate } from "react-router-dom";

import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-2);
  }

  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__button" type="button" onClick={goBack}>Назад</button>
      </section>
    </main>
  )
}

export default NotFound
