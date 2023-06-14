/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-dom';
function App() {
  return (
    <div>
      <CssBaseline>
        <main>
          <Routes>
            <Route exact path="/movie/:id" element={<h1>Movie Information </h1>} />
            <Route exact path="/actors/:id" element={<h1>Actors</h1>} />
            <Route exact path="/" element={<h1>Movies</h1>} />
            <Route exact path="/profile/:id" element={<h1>Profile</h1>} />
          </Routes>

        </main>
      </CssBaseline>
    </div>
  );
}
export default App;
