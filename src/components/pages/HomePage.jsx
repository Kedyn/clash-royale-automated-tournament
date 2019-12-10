import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { getCurrentUser } from "services/user";

import Register from "components/modals/Register";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegister: false
    };
  }

  showRegister() {
    this.setState({ showRegister: true });
  }

  hideRegister(registered) {
    if (registered) {
      this.props.history.push("/account");
    }

    this.setState({ showRegister: false });
  }

  handleGetStarted() {
    if (getCurrentUser()) {
      this.props.history.push("/account");
    } else {
      this.showRegister();
    }
  }

  render() {
    const { showRegister } = this.state;

    return (
      <React.Fragment>
        <div className="flex-fill d-flex align-items-center home">
          <Container className="text-center">
            <h1 className="text-white">Clash Royale Automated Tournament</h1>
            <div className="mb-5 text-white">
              Are you competitive?
              <br />
              Think you can be the next campion?
              <br />
              Join the battle to find out who is the best player.
            </div>
            <Button className="px-5" onClick={() => this.handleGetStarted()}>
              Get Started
            </Button>
          </Container>
        </div>

        <Register
          show={showRegister}
          onClose={registered => this.hideRegister(registered)}
        />
      </React.Fragment>
    );
  }
}
