import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardColumns, Container } from "react-bootstrap";

export default class TournamentsPage extends Component {
  render() {
    let tournaments = [];

    for (let index = 0; index < 10; index++) {
      let participants = Math.floor(Math.random() * 16);

      tournaments.push({
        title: "Tournament " + (index + 1),
        participants: participants
      });
    }

    return (
      <React.Fragment>
        <Container className="my-2">
          <CardColumns>
            {tournaments.map((tournament, index) => (
              <Card key={index}>
                <Card.Title className="text-center">
                  {tournament.title}
                </Card.Title>
                <Card.Body className="text-center">
                  <Card.Text>{tournament.participants}</Card.Text>
                  <Button
                    as={Link}
                    to={`/tournament/${tournament.participants}`}
                  >
                    Check
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Container>
      </React.Fragment>
    );
  }
}
