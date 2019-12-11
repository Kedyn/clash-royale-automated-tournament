import React, { Component } from "react";
import {
  Modal,
  Form,
  Row,
  Col,
  InputGroup,
  Spinner,
  Button
} from "react-bootstrap";
import { getCurrentUser } from "services/user";

export default class TournamentEditor extends Component {
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

    const form = event.target;

    this.setState({ validated: true }, () => {
      if (form.checkValidity() === true) {
        const { title, number, date, prize, url, rules } = form;

        const number_rounds = Math.ceil(Math.log2(number.value));

        let matches = Math.ceil(number.value / 2) * 2;
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

        let tournament = {
          title: title.value,
          host: getCurrentUser().tag,
          participants: [],
          date: date.value,
          prize: prize.value,
          url: url.value,
          rules: rules.value,
          rounds
        };

        console.log(tournament);
      }
    });
  }

  handleClose() {
    this.setState({
      validated: false,
      checking: false,
      error: ""
    });

    this.props.onClose(false, "");
  }

  render() {
    const { validated, checking, error } = this.state;
    const { show, update } = this.props;

    let error_content = "";
    let status_content = "Create";

    if (error) {
      error_content = (
        <Row className="mb-4 text-center">
          <Col>
            <span className="text-danger">{error}</span>
          </Col>
        </Row>
      );
    }

    if (update) {
      status_content = "Update";
    }

    if (checking) {
      status_content = <Spinner animation="grow" />;
    }

    return (
      <React.Fragment>
        <Modal show={show} onHide={() => this.handleClose()} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Tournament</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={validated}
              onSubmit={event => this.handleSubmit(event)}
            >
              <Row className="mb-4">
                <Col>
                  <Form.Control placeholder="Title" name="title" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a tournament title.
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md="6">
                  <Form.Control
                    type="number"
                    placeholder="Number of players"
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
                    placeholder="Date"
                    type="date"
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
                  <Form.Control placeholder="Prize" name="prize" required />
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
