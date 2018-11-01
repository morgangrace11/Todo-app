import React, { Component} from "react";
import "./App.css";
import Inputbar from "./components/inputbar";
import Todo from "./components/todos"

export default class App extends Component{
  constructor(props) {
  	super(props);

  	this.state = {
  	  todo: "",
  	  todoArray: []
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
   e.preventDefault();
    this.setState({
      todo: e.target.value
    });
  }

  handleClick(e) {
  	let todos = [];
  	todos.push(this.state.todo);
  	console.log(todos, 'array');

  	this.setState({
      todoArray: todos
  	})
    console.log(this.state.todoArray, 'state');
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
