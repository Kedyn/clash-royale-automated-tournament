import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

import "styles/tournament.css";
import Bracket from "./Bracket";

export default class TournamentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournamnet: null
    };
  }

  componentDidMount() {
    //this.props.history.push("/");
    this.setState({
      tournamnet: {
        title: "Test Tournament",
        host: "Host 1",
        participants: [
          "Player 1",
          "Player 2",
          "Player 3",
          "Player 4",
          "Player 5",
          "Player 6",
          "Player 7",
          "Player 8",
          "Player 9",
          "Player 10",
          "Player 11",
          "Player 12",
          "Player 13",
          "Player 14",
          "Player 15",
          "Player 16"
        ],
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
              },
              {
                players: [
                  {
                    name: "Player 5",
                    score: 1
                  },
                  {
                    name: "Player 6",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 7",
                    score: 1
                  },
                  {
                    name: "Player 8",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 9",
                    score: 1
                  },
                  {
                    name: "Player 10",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 11",
                    score: 1
                  },
                  {
                    name: "Player 12",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 13",
                    score: 1
                  },
                  {
                    name: "Player 14",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 15",
                    score: 1
                  },
                  {
                    name: "Player 16",
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
              },
              {
                players: [
                  {
                    name: "Player 5",
                    score: 1
                  },
                  {
                    name: "Player 6",
                    score: 0
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 7",
                    score: 1
                  },
                  {
                    name: "Player 8",
                    score: 0
                  }
                ]
              }
            ]
          },
          {
            best: 3,
            matches: [
              {
                players: [
                  {
                    name: "Player 1",
                    score: 2
                  },
                  {
                    name: "Player 3",
                    score: 1
                  }
                ]
              },
              {
                players: [
                  {
                    name: "Player 4",
                    score: 2
                  },
                  {
                    name: "Player 6",
                    score: 0
                  }
                ]
              }
            ]
          },
          {
            best: 5,
            matches: [
              {
                players: [
                  {
                    name: "Player 1",
                    score: 0
                  },
                  {
                    name: "Player 4",
                    score: 0
                  }
                ]
              }
            ]
          }
        ]
      }
    });
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
            <Button variant="primary">Bracket</Button>
            <Button variant="primary">Participants</Button>
            <Button variant="primary">Settings</Button>
          </Container>
        </Jumbotron>

        <Bracket show={true} rounds={tournamnet.rounds} />
      </React.Fragment>
    );
  }
}
