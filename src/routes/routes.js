import React from "react";
import { Route, Router, Switch } from "react-router";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import WorkWithUs from "../pages/WorkWithUs";
import history from '../services/history';
// import { Container } from './styles';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/work_with_us"  component={WorkWithUs}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;
