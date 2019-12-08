import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "components/pages/NotFoundPage";
import HomePage from "components/pages/HomePage";
import TournamentPage from "components/pages/tournament/TournamentPage";
import RegisterPage from "components/pages/RegisterPage";

import NavigationBar from "./components/layout/NavigationBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Add navbar here */}
        <NavigationBar/>

        <Switch>
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/tournament/:id" component={TournamentPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={RegisterPage}/>
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
