import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#9d8d8f",
      padding: "10px",
      borderBottom: "1px #ccc dashed ",
      color: "#faed26",
      textDecoration: this.props.item.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}
const btnStyle = {
  background: "#46344e",
  color: "white",
  fontSize: "10px",
  border: "none",
  borderRadius: "25%",
  padding: " 5px 10px ",
  cursor: "pointer",
  float: "right"
};

Todoitem.propTypes = {
  item: PropTypes.object.isRequired
};
