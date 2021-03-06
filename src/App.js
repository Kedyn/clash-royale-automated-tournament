import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "components/pages/NotFoundPage";
import HomePage from "components/pages/HomePage";
import TournamentPage from "components/pages/tournament/TournamentPage";
import AccountPage from "components/pages/AccountPage";
import TestPage from "components/pages/TestPage";
import TournamentsPage from "components/pages/TournamentsPage";

import NavigationBar from "./components/layout/NavigationBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <Switch>
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/tournaments" component={TournamentsPage} />
          <Route path="/tournament/:id" component={TournamentPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
