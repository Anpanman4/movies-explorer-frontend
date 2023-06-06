import React from "react";
import { Link } from "react-router-dom";

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
          <nav>
            <ul className="footer__text-container">
              <li>
                <Link className="footer__text" to="https://practicum.yandex.ru/" target="_blank" rel='noopener noreferrer'>Яндекс.Практикум</Link>
              </li>
              <li>
                <Link className="footer__text" to="https://github.com/Anpanman4" target="_blank" rel='noopener noreferrer'>Github</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer;
