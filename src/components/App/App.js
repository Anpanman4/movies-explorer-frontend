import { Route, Routes } from 'react-router-dom';

import '../../vendor/normalize.css'

import Main from '../Main/Main'

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          exact path='/'
          element={
            <main>
              <Main />
            </main>
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
