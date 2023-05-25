import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css'

import Main from '../Main/Main'

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          exact path='/'
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          exact path='/movies'
        />
        <Route
          exact path='/saved-movies'
        />
        <Route
          exact path='/profile'
        />
      </Routes>
    </>
  );
}

export default App;
