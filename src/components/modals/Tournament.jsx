import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Tournament extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal show={show} onHide={() => this.handleClose()} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
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
