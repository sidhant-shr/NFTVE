import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router } from 'react-router-dom';

import Appp from './components/appp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Appp />
  </Router>,

);
