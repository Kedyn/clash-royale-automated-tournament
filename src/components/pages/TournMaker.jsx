import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import React, { Component } from "react";
import "styles/tournmaker.css";

import { parseGameInfo } from "services/ClashRoyale";
import { registerTourn } from "services/tournament";

//PUT registerTourn function in place of this.login to this.registerTourn in button below

export default class TournMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tourn_title: "",
      tourn_prize: "",
      tourn_time: "",
      tourn_url: ""
    };
  }

  handleSubmit(event) {
    //event.preventDefault();

    const form = event.target;

  
      const { tourn_title, tourn_prize, tourn_time, tourn_url } = form;

      registerTourn(tourn_title.value, tourn_prize.value, tourn_time.value, tourn_url.value)
        .then(() => {
          this.props.onClose(true);
        })
        .catch(err => {
          this.setState({ error: err });
        });
    
  }

  render() {
    return <div>

<div className ="tback">
      <form onSubmit={event => this.handleSubmit(event)}>
      <div style={{ textAlign: 'center' }}>
        <div>
            
          <div>Tournament Name</div>
          <Form.Control
                  
                  placeholder="tournament title"
                  name="tourn_title"
                  required
                />
        </div>
        <div>
          <div>Prize</div>
          <Form.Control
                  
                  placeholder="tournament prize"
                  name="tourn_prize"
                  required
                />
        </div>
        <div>
          <div>Time of Tournament</div>
          <Form.Control
                  
                  placeholder="tournament time"
                  name="tourn_time"
                  required
                />
        </div>
        <div>
          <div>URL</div>
          <Form.Control
                  
                  placeholder="tournament URL"
                  name="tourn_url"
                  required
                />
        </div>
        <button style={{margin: '10px'}} onClick={() => this.handleSubmit()}>Register</button>   
       
      </div>
      </form>

      </div>

    </div>;
  }
}


{/* <div className ="tback">
      <form onSubmit={event => this.handleSubmit(event)}>
      <div style={{ textAlign: 'center' }}>
        <div>
            
          <div>Tournament Name</div>
          <Form.Control
                  
                  placeholder="tournament title"
                  name="tourn_title"
                  required
                />
        </div>
        <div>
          <div>Prize</div>
          <Form.Control
                  
                  placeholder="tournament prize"
                  name="tourn_prize"
                  required
                />
        </div>
        <div>
          <div>Time of Tournament</div>
          <Form.Control
                  
                  placeholder="tournament time"
                  name="tourn_time"
                  required
                />
        </div>
        <div>
          <div>URL</div>
          <Form.Control
                  
                  placeholder="tournament URL"
                  name="tourn_url"
                  required
                />
        </div>
        <button style={{margin: '10px'}} onClick={() => this.handleSubmit()}>Register</button>   
       
      </div>
      </form>

      </div> */}

