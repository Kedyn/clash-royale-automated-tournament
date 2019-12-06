import React, { Component } from "react";

import Match from "components/pages/tournament/Match";

import "styles/tournament.css";

export default class TournamentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournamnet: {
        players: [],
        rounds: [{}]
      }
    };
  }

  render() {
    // const { id: players } = this.props.match;

    return (
      <React.Fragment>
        <div className="bg-dark overflow-auto">
          <div className="d-md-flex align-items-stretch justify-content-center min-vh-100">
            <div className="d-md-flex flex-column justify-content-around align-items-center mr-2">
              <Match />
              <Match />
            </div>
            <div className="d-md-flex flex-column justify-content-around align-items-center mr-2">
              <Match />
            </div>
            <div className="d-md-flex flex-column justify-content-around align-items-center">
              <Match />
            </div>
            <div className="d-md-flex flex-column justify-content-around align-items-center ml-2">
              <Match />
            </div>
            <div className="d-md-flex flex-column justify-content-around align-items-center mr-2">
              <Match />
              <Match />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
