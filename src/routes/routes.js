import React from "react";
import { Route, Router, Switch } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import WhoWeAre from "../pages/WhoWeAre";
import history from '../services/history';
// import { Container } from './styles';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/who_we_are" exact component={WhoWeAre}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;
