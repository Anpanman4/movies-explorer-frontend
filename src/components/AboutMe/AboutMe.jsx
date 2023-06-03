import React from "react";
import { Link } from "react-router-dom";

import './AboutMe.css';

import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <>
      <section className="about">
        <h2 className="about__head">Студент</h2>
        <article className="about__container">
          <img src={avatar} alt="Аватарка" className="about__avatar" />
          <div className="about__info-container">
            <h3 className="about__title">Алексей</h3>
            <p className="about__subtitle">Фронтенд-разработчик, 21 год</p>
            <p className="about__text">
              Я родился в Тверь и сейчас живу в Санкт-Петербурге, учусь на третьем курсе в ИТМО. Я люблю
              заниматься многими видами спорта для поддержания себя в хорошем духе. После того, как пройду курс по веб-разработке,
              серьезно хочу заняться поисками постоянной работы или различных стажировок.
            </p>
            <Link className="about__git" to="https://github.com/Anpanman4" target="_blank" rel="noreferrer">Github</Link>
          </div>
        </article>
        <h3 className="about__portfolio-title">Портфолио</h3>
        <nav>
          <ul className="about__links">
            <li className="about__link">
              <Link className="about__link-text" to="https://github.com/Anpanman4/how-to-learn" target="_blank" rel="noreferrer">
                Статичный сайт<span className="about__href">↗</span>
              </Link>
            </li>
            <li className="about__link">
              <Link className="about__link-text" to="https://github.com/Anpanman4/russian-travel" target="_blank" rel="noreferrer">
                Адаптивный сайт<span className="about__href">↗</span>
              </Link>
            </li>
            <li className="about__link">
              <Link className="about__link-text" to="https://github.com/Anpanman4/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
                Одностраничное приложение<span className="about__href">↗</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default AboutMe;
