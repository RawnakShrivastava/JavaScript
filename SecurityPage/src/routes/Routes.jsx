import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "../history/history";

import Home from "../components/Home";
import FileManager from "../components/filemanager";

const MainRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/fileman" component={FileManager} />
    </Switch>
  </Router>
);

export default MainRoutes;
