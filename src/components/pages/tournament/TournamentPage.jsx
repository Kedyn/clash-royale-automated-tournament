import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

import Bracket from "./Bracket";

function generateTournament(number_participants) {
  const number_rounds = Math.ceil(Math.log2(number_participants));

  let matches = Math.ceil(number_participants / 2) * 2;
  let total_players = matches;
  let rounds = [];

  for (let round = 0; round < number_rounds; round++) {
    matches /= 2;

    let round_content = {
      best: 1,
      matches: []
    };

    for (let match = 0; match < matches; match++) {
      let match_content = {
        players: [
          {
            name: "",
            score: -1
          },
          {
            name: "",
            score: -1
          }
        ]
      };

      round_content.matches.push(match_content);
    }

    rounds.push(round_content);
  }

  let participants_list = [];

  for (let index = 0; index < number_participants; index++) {
    participants_list.push("Player " + (index + 1));
  }

  for (let index = number_participants; index < total_players; index++) {
    participants_list.push("BYE");
  }

  let tournament = {
    title: "Test tournament",
    host: "Tester",
    participants: participants_list,
    date: "2019-12-10",
    prize: "Bragging rights",
    url: "test",
    rules: "No rules",
    rounds
  };

  return tournament;
}

export default class TournamentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournamnet: null
    };
  }

  componentDidMount() {
    //this.props.history.push("/");
    this.setState({ tournamnet: generateTournament(this.props.match.id) });
  }

  render() {
    const { tournamnet } = this.state;
    // const { id: players } = this.props.match;

    if (!tournamnet) {
      return <React.Fragment></React.Fragment>;
    }

    return (
      <React.Fragment>
        <Jumbotron className="bg-dark text-center text-light pb-0 mb-0">
          <h1 className="text-info">{tournamnet.title}</h1>
          <div className="text-success">
            {tournamnet.participants.length} Participants
          </div>
          <div>Created by {tournamnet.host}</div>

          <Container className="pt-4">
            <Button variant="primary">Participants</Button>
            <Button variant="primary">Settings</Button>
          </Container>
        </Jumbotron>

        <Bracket show={true} rounds={tournamnet.rounds} />
      </React.Fragment>
    );
  }
}
