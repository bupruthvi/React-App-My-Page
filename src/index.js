import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './Body';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="mainBody">
      <App />
      <Body />
    </div>
  </Router>,
  document.getElementById('root','body'));
registerServiceWorker();
