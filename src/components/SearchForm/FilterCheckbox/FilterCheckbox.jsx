import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filtercheckbox">
      <input className="filtercheckbox__input" name="isShort" type="checkbox" />
      <span className="filtercheckbox__visible-input"/>
      <p className='filtercheckbox__text'>Короткометражки</p>
    </label>
  )
}

export default FilterCheckbox;
