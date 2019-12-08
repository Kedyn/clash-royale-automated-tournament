
import React, { Component } from "react";
import "styles/tournmaker.css";

import { parseGameInfo } from "services/ClashRoyale";
import { registerUser, registerTourn, getBDInfo } from "services/user";

//PUT registerTourn function in place of this.login to this.registerTourn in button below

export default class TournMaker extends Component {
  render() {
    return <div>

<div className ="tback">
      <div className = "regtourn">
      <div style={{ textAlign: 'center' }}>
        <div>
            
          <div>Tournament Name</div>
          <input id="tourn_name" placeholder="Enter Tournament Name" type="text"/>
        </div>
        <div>
          <div>Prize</div>
          <input id="tourn_prize" placeholder="Enter Prize.." type="text"/>
        </div>
        <div>
          <div>Time of Tournament</div>
          <input id="tourn_time" placeholder="Enter Time.." type="text"/>
        </div>
        <div>
          <div>URL</div>
          <input id="tourn_url" placeholder="Enter URL.." type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Register</button>   
       
      </div>
      </div>

      </div>


    </div>;
  }
}
