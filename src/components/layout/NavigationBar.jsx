import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { getCurrentUser, signOut } from "services/user";

import Login from "components/modals/Login";
import Register from "components/modals/Register";

class NavigationBar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showRegister: false
    };
  }

  showLogin() {
    this.setState({ showLogin: true });
  }

  hideLogin(loggedin) {
    if (loggedin) {
      this.props.history.push("/account");
    }

    this.setState({ showLogin: false });
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

  singOut() {
    signOut().then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    const { showLogin, showRegister } = this.state;

    if (getCurrentUser()) {
      return (
        <React.Fragment>
          <Navbar
            expand="md"
            className="text-uppercase"
            bg="primary"
            variant="dark"
          >
            <Navbar.Brand as={NavLink} exact to="/">
              Room Finder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/listings">
                  Listings
                </Nav.Link>
                <Nav.Link as={NavLink} to="/account">
                  Account
                </Nav.Link>
                <Nav.Link onClick={() => this.singOut()}>Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Navbar
          expand="md"
          className="text-uppercase"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand as={NavLink} exact to="/">
            Room Finder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => this.showLogin()}>Login</Nav.Link>
              <Nav.Link onClick={() => this.showRegister()}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Login
          show={showLogin}
          onClose={loggedin => this.hideLogin(loggedin)}
        />
        <Register
          show={showRegister}
          onClose={registered => this.hideRegister(registered)}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(NavigationBar);
