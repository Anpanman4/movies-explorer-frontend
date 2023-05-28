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
            <p className="footer__text">Яндекс.Практикум</p>
            <p className="footer__text">Github</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
