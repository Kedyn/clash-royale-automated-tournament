import React, { Component } from "react";
import { registerTourn, addPlayerToTourn, getTournaments, getUserIDs } from "services/tournament";
import { parseGameInfo } from "services/ClashRoyale";

export default class TestPage extends Component {
  render() {
    // registerTourn("Super New Front End Tourn", "1 Billion Dollars", "18:25", "www.google.com");
    // addPlayerToTourn("DQx0DnJyCY1gnu1grGbo");
    // getTournaments();
    // getUserIDs()

    parseGameInfo("L8PYR99VP", true)
    return <div></div>;
  }
}
