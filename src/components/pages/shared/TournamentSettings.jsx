import React, { Component } from "react";
import { Form, Row, Col, InputGroup, Spinner, Button } from "react-bootstrap";

export default class TournamentSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      error: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ validated: true }, () => {
      const form = event.target;

      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        const { title, number, date, prize, url, rules } = form;

        this.props.onSubmit(
          title.value,
          number.value,
          date.value,
          prize.value,
          url.value,
          rules.value
        );
      }
    });
  }

  render() {
    const { validated, checking, error } = this.state;

    let error_content = "";
    let status_content = this.props.button;

    if (error) {
      error_content = (
        <Row className="mb-4 text-center">
          <Col>
            <span className="text-danger">{error}</span>
          </Col>
        </Row>
      );
    }

    if (checking) {
      status_content = <Spinner animation="grow" />;
    }

    return (
      <React.Fragment>
        <Form
          noValidate
          validated={validated}
          onSubmit={event => this.handleSubmit(event)}
        >
          <Row className="mb-4">
            <Col>
              <Form.Control
                placeholder="Tournament title"
                name="title"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a tournament title.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md="6">
              <Form.Control
                placeholder="Tournament number of players"
                name="number"
                min="2"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a number of players.
              </Form.Control.Feedback>
            </Col>
            <Col md="6">
              <Form.Control
                placeholder="Tournament date"
                type="datetime-local"
                name="date"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a tournament date.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Form.Control
                placeholder="Tournament prize"
                name="prize"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a tournament prize.
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="urlAddon">
                    https://crat.com/tournament/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="URL to share"
                  name="url"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a url for your tournament.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Form.Control
                name="rules"
                as="textarea"
                placeholder="Enter your tournament rules."
                rows="4"
              />
            </Col>
          </Row>

          {error_content}

          <Row>
            <Col>
              <Button type="submit" block disabled={checking}>
                {status_content}
              </Button>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    );
  }
}
