import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "components/pages/NotFoundPage";
import HomePage from "components/pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Add navbar here */}

        <Switch>
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
