import React , { Component } from "react";
import ReactDOM from "react-dom";


export default class Inputbar extends Component {
  render(props) {
  	return (
  	  <div>
        <input type="text" onChange={this.props.handleChange}></input>
        <button onClick={this.props.handleClick}>Submit</button>
      </div>
  	);
  }
}

