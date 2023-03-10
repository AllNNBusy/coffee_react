import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// router
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import './index.scss';
import './style/fz.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);