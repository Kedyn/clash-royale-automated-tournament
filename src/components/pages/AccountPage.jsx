import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import TournamentEditor from "components/modals/TournamentEditor";

export default class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTournamentEditor: false
    };
  }

  showTournamentEditor() {
    this.setState({ showTournamentEditor: true });
  }

  hideTournamentEditor(created, url) {
    if (created) {
      this.props.history.push("/tournament/" + url);
    }

    this.setState({ showTournamentEditor: false });
  }

  render() {
    const { showTournamentEditor } = this.state;

    return (
      <React.Fragment>
        <Container className="py-4">
          <Row>
            <Col md="6">
              <h3 className="text-center">Tournaments you participated in</h3>

              <Row className="mb-3">
                <Col className="text-right">
                  <Button as={Link} to="/tournaments">
                    Join a tournament
                  </Button>
                </Col>
              </Row>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Tournament name</th>
                    <th>Result</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Not impleted feature</td>
                    <td>Winner</td>
                    <td>Everyone</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col md="6">
              <h3 className="text-center">Tournaments you created</h3>

              <Row className="mb-3">
                <Col className="text-right">
                  <Button onClick={() => this.showTournamentEditor()}>
                    Create a tournament
                  </Button>
                </Col>
              </Row>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Tournament name</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Not impleted feature</td>
                    <td>Everyone</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <TournamentEditor
          show={showTournamentEditor}
          update={false}
          onClose={(created, url) => this.hideTournamentEditor(created, url)}
        />
      </React.Fragment>
    );
  }
}
