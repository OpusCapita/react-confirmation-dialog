/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ConfirmDialog from './components/confirm-dialog.component';

import './styles/main.scss';

require('./images/favicon.ico');

render((
  <Router history={hashHistory}>
    <Route path="/" component={ConfirmDialog} />
  </Router>
), document.getElementById('oc-examples'));
