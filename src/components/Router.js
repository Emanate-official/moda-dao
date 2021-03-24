import React from "react";
import { createBrowserHistory } from "history";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import StakePage from "../pages/Stake";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/stake" component={StakePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </ReactRouter>
);

export default Router;
