import React from "react";
import App from "../App"; 

const Todos = (props) => {
 return (
    <ul>
      {props.todoArray.map((todo) => {
        return <li className="todo" key={todo}>{todo}</li>
      })}
    </ul>
  ); 
}

export default Todos;
