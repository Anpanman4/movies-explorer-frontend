import React from "react";

import './AboutProject.css'

function AboutProject() {
  return (
    <>
      <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
          <div>
            <h3 className="about-project__small-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h3 className="about-project__small-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
              было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__container">
          <p className="about-project__week about-project__week_green">1 неделя</p>
          <p className="about-project__week about-project__week_black">4 недели</p>
          <p className="about-project__subtitle">Back-end</p>
          <p className="about-project__subtitle">Front-end</p>
        </div>
      </section>
    </>
  );
}

export default AboutProject;
