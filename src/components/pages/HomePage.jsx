import React, { Component } from "react";
import { getPlayerGames } from "services/ClashRoyale";

export default class HomePage extends Component {
  componentDidMount() {
    getPlayerGames().then(battles => {
      console.log(battles);
    });
  }

  render() {
    return <div></div>;
  }
}
