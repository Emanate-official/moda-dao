import React from "react";
import { createBrowserHistory } from "history";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Switch>
      <Route path="/login" component={HomePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </ReactRouter>
);

export default Router;
