import React, { Component } from "react";

import Match from "./Match";

export default class Round extends Component {
  render() {
    const { data } = this.props;
    const { best, matches } = data;
    const players = matches.length * 2;

    let name = "Round Of " + players;

    if (players <= 4) {
      name = "Finals";

      if (players === 4) name = "Semifinals";
    }

    return (
      <React.Fragment>
        <div className="d-flex">
          <div
            className="d-flex flex-column w-100 mx-2"
            style={{ maxWidth: 160 }}
          >
            <div className="my-2 text-center text-uppercase">
              <strong className="text-info">{name}</strong>
              <br />
              <small className="text-success">Best of {best}</small>
            </div>
            <div
              className="d-flex flex-column justify-content-around flex-fill mr-2"
              style={{ width: 160 }}
            >
              {matches.map((match, index) => (
                <Match key={index} data={match} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
