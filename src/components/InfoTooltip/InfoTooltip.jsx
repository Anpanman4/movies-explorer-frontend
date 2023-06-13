import React from "react";

import "./InfoTooltip.css"

import Success from "../../images/Success.svg"
import Fail from "../../images/Fail.svg"

function InfoTooltip({isOpened, onClose, isSuccess}) {
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpened ? "popup_opened" : ""}`} tabIndex={-1} onClick={handleClickOverlay} onKeyDown={handleEscape}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__alert" src={isSuccess ? Success : Fail} alt="Успешно" />
        <h2 className="popup__title-alert">{isSuccess ? "Данные были успешно изменены" : "Данный email уже занят"}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip
