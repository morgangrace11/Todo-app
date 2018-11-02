import React, { Component} from "react";
import "./App.css";
import Inputbar from "./components/inputbar";
import Todos from "./components/todos"

export default class App extends Component{
  constructor(props) {
  	super(props);

  	this.state = {
  	  todo: "",
  	  todoArray: [],
  	  clicked: false
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleClick(e) {
  	this.state.todoArray.push(this.state.todo);
  	this.setState({todo: ""});
  }
  

  render(){
  	console.log(this.state.todoArray);
    return(
 
      <div>
        <h1 className="heading">Todo list</h1>
        <Inputbar handleClick={this.handleClick} handleChange={this.handleChange}/>
        <Todos todoArray={this.state.todoArray}/>
      </div>
    );
  }
}
