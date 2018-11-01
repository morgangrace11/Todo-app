import React, { Component} from "react";
import "./App.css";
import Inputbar from "./components/inputbar";
import Todo from "./components/todos"

export default class App extends Component{
  constructor(props) {
  	super(props);

  	this.state = {
  	  todo: ""
  	}
  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
    console.log(e.target.value);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render(){
    return(
 
      <div className="App">
        <h1>Todo list</h1>
        <Inputbar handleClick={this.handleClick} handleChange={this.handleChange}/>

      </div>
    );
  }
}
