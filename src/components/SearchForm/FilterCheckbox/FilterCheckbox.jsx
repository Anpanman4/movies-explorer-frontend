import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({
  isShortMovie,
  setIsShortMovie,
}) {
  const handleChange = (e) => {
    setIsShortMovie(e.target.checked)
    localStorage.setItem("isShort", e.target.checked)
  }

  return (
    <label className="filtercheckbox">
      <input className="filtercheckbox__input" name="isShort" type="checkbox" defaultChecked={JSON.parse(localStorage.getItem("isShort"))} onChange={handleChange} />
      <span className="filtercheckbox__visible-input"/>
      Короткометражки
    </label>
  )
}

export default FilterCheckbox;
