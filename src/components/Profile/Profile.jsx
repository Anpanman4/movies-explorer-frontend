import React, { useState } from "react";

import "./Profile.css"

import Header from "../Header/Header"

function Profile ({
  name,
  email,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpen = () => {
    setIsEdit(true)
  }

  const handleSubmit = () => {
    setIsEdit(false)
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <form className="profile" name="profile-form">
            <h1 className="profile__title">{`Привет, ${name}`}</h1>
            <div className="profile__container">
              <div className="profile__info-container">
                <h2 className="profile__info-title">Имя</h2>
                {isEdit
                ? <input className="profile__info-value" placeholder="Имя" name="name" type="text" id="name" value={name} required minLength="2" maxLength="30" />
                : <p className="profile__info-value">{name}</p>
                }
                
              </div>
              <div className="profile__info-container">
                <h2 className="profile__info-title">E-mail</h2>
                {isEdit
                ? <input className="profile__info-value" placeholder="Почта" name="email" type="email" id="email" value={email} required minLength="2" maxLength="30" />
                : <p className="profile__info-value">{email}</p>
                }
              </div>
            </div>
            {isEdit
            ? <button className="profile__button profile__button_submit" type="submit" onClick={handleSubmit}>Сохранить</button>
            : <>
                <button className="profile__button profile__button_edit" type="button" onClick={handleOpen}>Редактировать</button>
                <button className="profile__button profile__button_exit" type="button">Выйти из аккаунта</button>
              </>
            }
          </form>
        </section>
      </main>
    </>
  )
}

export default Profile;
