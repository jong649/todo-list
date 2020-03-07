import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default Todoitem;
