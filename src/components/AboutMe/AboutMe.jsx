import React from "react";

import './AboutMe.css';

import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <>
      <section className="about">
        <h2 className="about__head">Студент</h2>
        <article className="about__container">
          <img src={avatar} alt="Аватарка" className="about__avatar" />
          <div className="asd">
            <h3 className="about__title">Алексей</h3>
            <p className="about__subtitle">Фронтенд-разработчик, 21 год</p>
            <p className="about__text">
              Я родился в Тверь и сейчас живу в Санкт-Петербурге, учусь на третьем курсе в ИТМО. Я люблю
              заниматься многими видами спорта для поддержания себя в хорошем духе. После того, как пройду курс по веб-разработке,
              серьезно хочу заняться поисками постоянной работы или различных стажировок.
            </p>
            <p className="about__git">Github</p>
          </div>
        </article>
        <nav className="about__links">
          Портфолио
          <a className="about__link" href="https://github.com/Anpanman4/how-to-learn" target="_blank" rel="noopener noreferrer">
            Статичный сайт<span className="about__href">↗</span>
          </a>
          <a className="about__link" href="https://github.com/Anpanman4/russian-travel" target="_blank" rel="noopener noreferrer">
            Адаптивный сайт<span className="about__href">↗</span>
          </a>
          <a className="about__link" href="https://github.com/Anpanman4/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
            Одностраничное приложение<span className="about__href">↗</span>
          </a>
        </nav>
      </section>
    </>
  );
}

export default AboutMe;
