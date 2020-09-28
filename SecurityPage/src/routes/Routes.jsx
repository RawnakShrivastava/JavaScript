import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import { history } from '../history/history';

import  Home  from '../components/Home';

const MainRoutes= ()=> (
  <Router history= {history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default MainRoutes;