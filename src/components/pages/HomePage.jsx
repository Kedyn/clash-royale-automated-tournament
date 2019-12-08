import React, { Component } from "react";
import "styles/home.css";

import { parseGameInfo } from "services/ClashRoyale";
import { registerUser, registerTourn, getBDInfo } from "services/user";

export default class HomePage extends Component {

  signUp() {
    //register function to button
  }

  login() {
   //login button function to button
  }

  render() {

    // parseGameInfo()
    // registerUser("random@yahoo.com", "password13")
    // registerTourn("testTourn1", "BraggingRights", "04:19", "google.com")
    getBDInfo("tourn", "xXzzHV7fEccpZlEV6d5T")

    return <div>
      <div className ="back">
      <div className = "log">
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Register</button>
      </div>
      </div>

      </div>
      
    </div>;

   

  }
}

