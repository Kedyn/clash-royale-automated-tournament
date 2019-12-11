import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

import Bracket from "./Bracket";

function generateTournament(number_participants) {
  const number_rounds = Math.ceil(Math.log2(number_participants));

  let matches = Math.ceil(number_participants / 2) * 2;
  let total_players = matches;
  let rounds = [];
  let participants_list = [];

  for (let index = 0; index < number_participants; index++) {
    participants_list.push("Player " + (index + 1));
  }

  for (let index = number_participants; index < total_players; index++) {
    participants_list.push("BYE");
  }

  for (let round = 0; round < number_rounds; round++) {
    matches /= 2;

    let round_content = {
      best: 1,
      matches: []
    };

    for (let match = 0; match < matches; match++) {
      let participant = match * 2;
      let player_one = "";
      let player_two = "";
      let score_one = -1;
      let score_two = -1;

      if (round === 0) {
        player_one = participants_list[participant];
        score_one = 0;
        player_two = participants_list[participant + 1];
        score_two = 0;
      }

      let match_content = {
        players: [
          {
            name: player_one,
            score: score_one
          },
          {
            name: player_two,
            score: score_two
          }
        ]
      };

      round_content.matches.push(match_content);
    }

    rounds.push(round_content);
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
    let participants = this.props.match.params.id;
    this.setState({ tournament: generateTournament(participants) });
  }

  render() {
    const { tournament } = this.state;
    // const { id: players } = this.props.match;

    if (!tournament) {
      return <React.Fragment></React.Fragment>;
    }

    return (
      <React.Fragment>
        <Jumbotron className="bg-dark text-center text-light pb-0 mb-0">
          <h1 className="text-info">{tournament.title}</h1>
          <div className="text-success">
            {tournament.participants.length} Participants
          </div>
          <div>Created by {tournament.host}</div>

          <Container className="pt-4">
            <Button variant="primary">Participants</Button>
            <Button variant="primary">Settings</Button>
          </Container>
        </Jumbotron>

        <Bracket show={true} rounds={tournament.rounds} />
      </React.Fragment>
    );
  }
}
