import React , { Component } from "react";
import ReactDOM from "react-dom";


export default class Inputbar extends Component {
  render(props) {
  	return (
  	  <div className="input">
        <input className="inputField" type="text" onChange={this.props.handleChange} placeholder="What do you need to do?"></input>
        <button className="button" onClick={this.props.handleClick}>Submit</button>
      </div>
  	);
  }
}

