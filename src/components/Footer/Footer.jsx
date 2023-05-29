import React from "react";

import './Footer.css'

function Footer () {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__container">
          <p className="footer__copyright">&#169; {date}</p>
          <div className="footer__text-container">
            <a className="footer__text" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            <a className="footer__text" href="https://github.com/Anpanman4" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
