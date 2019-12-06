import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Match extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="match">
          <Row className="player">
            <Col xs="8">{data.players[0].name}</Col>
            <Col className="text-right">{data.players[0].score}</Col>
          </Row>
          <Row className="player">
            <Col xs="8">{data.players[1].name}</Col>
            <Col className="text-right">{data.players[1].score}</Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
