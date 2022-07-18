import React, { Component } from "react";
import Todo from "./TodoItem/ToDoitem";
import { Consumer } from "../../context";

export default class TodoList extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { TodoList } = value;
          return TodoList.map((t) => <Todo todo={t} key={t.id}></Todo>);
        }}
      </Consumer>
    );
  }
}
