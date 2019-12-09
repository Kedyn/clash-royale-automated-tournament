import React, { Component } from "react";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { getCurrentUser, registerUser } from "services/user";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      error: "",
      email: "",
      password: "",
      tag: ""
    };
  }

  checkValidity(form) {
    const { email, password, tag } = form;

    const errors = {
      email: "",
      password: "",
      tag: ""
    };

    email.setCustomValidity("Invalid");
    password.setCustomValidity("Invalid");
    tag.setCustomValidity("Invalid");

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

    if (!tag.value) {
      errors.tag = "Please enter your player tag.";
    } else {
      if (!/^[a-zA-Z0-9]{5,}$/.test(tag.value)) {
        errors.tag = "Please enter your player tag (without the #).";
      } else {
        tag.setCustomValidity("");
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
      const { email, password, tag } = form;

      registerUser(email.value, password.value, tag.value)
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
      password: "",
      tag: ""
    });

    this.props.onClose(false);
  }

  render() {
    if (getCurrentUser()) {
      return <React.Fragment></React.Fragment>;
    }

    const { validated, checking, error, email, password, tag } = this.state;
    const { show } = this.props;

    let error_content = "";
    let status_content = "Sign Up";

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
          <Modal.Title>Register</Modal.Title>
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
                  placeholder="Email address"
                  name="email"
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
                  placeholder="Password"
                  name="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {password}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control placeholder="Player tag" name="tag" required />
                <Form.Control.Feedback type="invalid">
                  {tag}
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
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
