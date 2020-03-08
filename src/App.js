import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";

export default class App extends Component {
  state = {
    todos: [
      // { id: uuidv4(), title: "drink coffee", completed: false },
      // { id: uuidv4(), title: "go to workplace", completed: true },
      // { id: uuidv4(), title: "meet friends", completed: false }
    ]
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  //Togle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(i => {
        if (i.id === id) {
          i.completed = !i.completed;
        }
        return i;
      })
    });
  };
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(i => i.id !== id)]
      })
    );
    // this.setState({
    //   todos: this.state.todos.filter(i => i.id !== id)
    // });
  };
  addTodo = title => {
    // const nn = {
    //   id: uuidv4(),
    //   title,
    //   completed: false
    // };
    // this.setState({ todos: [...this.state.todos, nn] });
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddToDo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
