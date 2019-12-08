import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import RegisterPage from "components/pages/RegisterPage";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showRegister: false
    };
  }

  showLogin = () => {
    this.setState({ showLogin: true });
  };
  hideLogin = () => {
    this.setState({ showLogin: false });
  };

  showRegister = () => {
    this.setState({ showRegister: true });
  };
  hideRegister = () => {
    this.setState({ showRegister: false });
  };

  render() {
    // const { showHomepage, showCreateEvent, showLogin, showRegister} = this.state;
    //const { showLogin } = this.state;

    return (
      <React.Fragment>
        <Navbar
          expand="md"
          className="text-uppercase"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand as={NavLink} exact to="/">
            C.R.A.T.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link onClick= {this.showHomepage}>Homepage</Nav.Link> */}
              {/* <Nav.Link onClick = {this.showCreateEvent}>Create Event</Nav.Link> */}
              <Nav.Link onClick={this.showLogin}>Login</Nav.Link>
              <Nav.Link onClick={this.showRegister}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <RegisterPage show ={showRegister} onClose={this.hideRegister}/> */}
        {/* <Login show ={showLogin} onClose={this.hideLogin}/> */}
      </React.Fragment>
    );
  }
}
