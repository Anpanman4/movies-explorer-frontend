import React from "react";

import './More.css'

function More ({ handleAddAmount }) {
  return (
    <div className="more">
      <button className="more__button" type="button" onClick={handleAddAmount}>Ещё</button>
    </div>
  )
}

export default More
