import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

export default class Todos extends Component {
  render() {
    return this.props.todos.map(item => {
      return (
        <Todoitem
          key={item.id}
          item={item}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}
//Proptypes-for valditation
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
