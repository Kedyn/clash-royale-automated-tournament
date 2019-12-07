import React, { Component } from "react";
import Player from "./Player";

export default class Match extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="my-1">
          {data.players.map((player, index) => (
            <Player key={index} data={player} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
