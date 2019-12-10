import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Tournament extends Component {
  render() {
    const { show } = this.props;

    return (
      <React.Fragment>
        <Modal show={show} onHide={() => this.handleClose()} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Tournament</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>DId this work</div>
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
