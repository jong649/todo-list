import React, { Component } from "react";
import PropTypes from "prop-types";

class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todoitem;
