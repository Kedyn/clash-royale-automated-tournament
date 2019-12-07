import React, { Component } from "react";
import Round from "./Round";

export default class Bracket extends Component {
  render() {
    const { show, rounds } = this.props;

    if (!show) {
      return <React.Fragment></React.Fragment>;
    }

    return (
      <React.Fragment>
        <div className="overflow-auto flex-fill d-flex justify-content-center">
          {rounds.map((round, index) => (
            <Round key={index} data={round} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
