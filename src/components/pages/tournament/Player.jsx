import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Player extends Component {
  render() {
    const { data } = this.props;

    let score = data.score;
    let name = data.name;

    if (score < 0) {
      score = "";
      name = <>&nbsp;</>;
    }

    return (
      <React.Fragment>
        <Row className="p-0 text-light m-0">
          <Col xs="9" className="bg-dark py-1">
            {name}
          </Col>
          <Col xs="3" className="text-center bg-info py-1">
            {score}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
