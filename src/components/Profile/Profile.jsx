import React from "react";

import "./Profile.css"

import Header from "../Header/Header"

function Profile () {
  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, Алексей</h1>
          <div className="profile__container">
            <div className="profile__info-container">
              <h2 className="profile__info-title">Имя</h2>
              <p className="profile__info-value">Алексей</p>
            </div>
            <div className="profile__info-container">
              <h2 className="profile__info-title">E-mail</h2>
              <p className="profile__info-value">anpanman@yandex.ru</p>
            </div>
          </div>
          <button className="profile__button-edit">Редактировать</button>
          <button className="profile__button-exit">Выйти из аккаунта</button>
        </section>
      </main>
    </>
  )
}

export default Profile;
