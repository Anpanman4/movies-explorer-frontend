import React, { useContext, useEffect, useState } from "react";

import api from "../../utils/MainApi";
import { regForName, reqForEmail } from "../../utils/const";

import "./Profile.css"

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header"

function Profile ({
  setIsOpenPopupInfo,
  logOut,
  setCurrentUser,
  setIsSuccess,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const [isEdit, setIsEdit] = useState(false);
  const [ inputValues, setInputValues ] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [ isReadyForSubmit, setIsReadyForSubmit ] = useState(true);

  const handleOpen = () => {
    setIsEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValues.name === currentUser.name && inputValues.email === currentUser.email) {
      setIsEdit(false);
      return
    }

    api.patchMe(inputValues)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: inputValues.name,
          email: inputValues.email,
        });
        setIsEdit(false);
        setIsSuccess(true);
        setIsOpenPopupInfo(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsOpenPopupInfo(false);
        console.log(err);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  useEffect(() => {
    if (reqForEmail.test(inputValues.email) && regForName.test(inputValues.name) && (currentUser.email !== inputValues.email || currentUser.name !== inputValues.name)) {
      setIsReadyForSubmit(true);
    } else {
      setIsReadyForSubmit(false);
    }
  }, [inputValues, currentUser])

  return (
    <>
      <Header />
      <main>
        <section>
          <form className="profile" name="profile-form">
            <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
            <div className="profile__container">
              <div className="profile__info-container">
                <h2 className="profile__info-title">Имя</h2>
                {isEdit
                ? <input className="profile__info-value" placeholder="Имя" name="name" type="text" id="name" defaultValue={currentUser.name} required minLength="2" maxLength="30" onChange={handleChange} />
                : <p className="profile__info-value">{currentUser.name}</p>
                }
                
              </div>
              <div className="profile__info-container">
                <h2 className="profile__info-title">E-mail</h2>
                {isEdit
                ? <input className="profile__info-value" placeholder="Почта" name="email" type="email" id="email" defaultValue={currentUser.email} required minLength="2" maxLength="30" onChange={handleChange} />
                : <p className="profile__info-value">{currentUser.email}</p>
                }
              </div>
            </div>
            {isEdit
            ? <button className={`profile__button profile__button_submit ${isReadyForSubmit ? "" : "profile__button_unactive"}`} disabled={!isReadyForSubmit} type="submit" onClick={handleSubmit}>Сохранить</button>
            : <>
                <button className="profile__button profile__button_edit" type="button" onClick={handleOpen}>Редактировать</button>
                <button className="profile__button profile__button_exit" type="button" onClick={logOut}>Выйти из аккаунта</button>
              </>
            }
          </form>
        </section>
      </main>
    </>
  )
}

export default Profile;
