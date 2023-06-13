import React from "react";

import "./InfoTooltip.css"

import Success from "../../images/Success.svg"

function InfoTooltip({isOpened, onClose}) {
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
        <img className="popup__alert" src={Success} alt="Успешно" />
        <h2 className="popup__title-alert">Данные были успешно изменены</h2>
      </div>
    </div>
  )
}

export default InfoTooltip
