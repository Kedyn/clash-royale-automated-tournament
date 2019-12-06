import React, { Component } from "react";

import Match from "components/pages/tournament/Match";

import "styles/tournament.css";

export default class TournamentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournamnet: {
        players: ["Player 1", "Player 2", "Player 3", "Player 4"],
        rounds: [
          {
            best: 1,
            matches: [
              {
                players: [
                  {
                    name: "Player 1",
                    score: 1
                  },
                  {
                    name: "Player 2",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 3",
                    score: 1
                  },
                  {
                    name: "Player 4",
                    score: 0
                  }
                ]
              }
            ]
          },
          {
            best: 1,
            matches: [
              {
                players: [
                  {
                    name: "Player 1",
                    score: 0
                  },
                  {
                    name: "Player 3",
                    score: 0
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }

  render() {
    const { tournamnet } = this.state;
    // const { id: players } = this.props.match;

    return (
      <React.Fragment>
        <div className="test">xd</div>
        <div className="bg-dark overflow-auto flex-fill d-flex">
          <div className="d-md-flex align-items-stretch justify-content-center flex-fill">
            {tournamnet.rounds.map((round, round_index) => (
              <div
                key={round_index}
                className="d-md-flex flex-column justify-content-around align-items-center mr-2"
              >
                {round.matches.map((match, match_index) => (
                  <Match key={match_index} data={match} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
