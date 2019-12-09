import React, { Component } from "react";
import { Modal, Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { login } from "services/user";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      error: "",
      email: "",
      password: ""
    };
  }

  checkValidity(form) {
    const { email, password } = form;

    const errors = {
      email: "",
      password: ""
    };

    email.setCustomValidity("Invalid");
    password.setCustomValidity("Invalid");

    if (!email.value) {
      errors.email = "Please enter a your email.";
    } else {
      if (
        !/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value)
      ) {
        errors.email = "Please enter a valid email.";
      } else {
        email.setCustomValidity("");
      }
    }

    if (!password.value) {
      errors.password = "Please enter a password.";
    } else {
      if (
        !/[A-Z]/.test(password.value) ||
        !/[a-z]/.test(password.value) ||
        !/[0-9]/.test(password.value) ||
        !/[^a-zA-Z\d]/.test(password.value) ||
        password.value.length < 8
      ) {
        errors.password =
          "Your password must contain at least eight characters, an uppercase and lowercase letter, a number, and a special character.";
      } else {
        password.setCustomValidity("");
      }
    }

    this.setState({ ...errors, validated: true });
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    this.checkValidity(form);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const { email, password } = form;

      login(email.value, password.value)
        .then(() => {
          this.props.onClose(true);
        })
        .catch(err => {
          this.setState({ error: err });
        });
    }
  }

  handleClose() {
    this.setState({
      validated: false,
      checking: false,
      error: "",
      email: "",
      password: ""
    });

    this.props.onClose(false);
  }

  render() {
    const { validated, checking, error, email, password } = this.state;
    const { show } = this.props;

    let error_content = "";
    let status_content = "Login";

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
      <Modal show={show} onHide={() => this.handleClose()} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={event => this.handleSubmit(event)}
          >
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {email}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {password}
                </Form.Control.Feedback>
              </Col>
            </Row>
            {error_content}
            <Row>
              <Col className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  block
                  disabled={checking}
                >
                  {status_content}
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => this.handleClose()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
