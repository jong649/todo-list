import React, { Component } from "react";
import Todoitem from "./Todoitem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <Todoitem key={todo.id} todo={todo} />);
  }
}

export default Todos;
