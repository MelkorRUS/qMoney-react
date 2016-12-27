import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import Accounts from './Accounts/Accounts';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="accounts" component={Accounts}>
        <Route path=":id" />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
