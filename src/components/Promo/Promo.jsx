import React from "react";

import './Promo.css'

import design from '../../images/design.svg'

function Promo() {
  return (
    <>
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={design} alt="Узор" className="promo__design" />
      </section>
    </>
  );
}

export default Promo;
