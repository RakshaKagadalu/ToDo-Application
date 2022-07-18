import React, { Component } from "react";
import "./TodiItem.scss";
import { Consumer } from "../../../context";

export class ToDoitem extends Component {
  style = () => {
    const { status } = this.props.todo;
    return { textDecoration: status ? "line-through" : "none" };
  };

  toggle = (id, dispatch) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  // add = (dispatch, e) => {
  //   e.preventDefault();
  //   const newTodo = this.state;
  //   axios
  //     .post("/items", newTodo)
  //     .then((res) => dispatch({ type: "ADD", payload: res.data }));
  //   this.setState({ title: "", description: "", dueDate: "", time: "" });
  // };

  render() {
    const { title, id } = this.props.todo;
    const { description } = this.props.todo;
    const { dueDate } = this.props.todo;
    const { time } = this.props.todo;
    const { status } = this.props.todo;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <h5 style={this.style()}>
              {status === true ? (
                <input
                  checked={true}
                  type="checkbox"
                  className="TodoItem"
                  onChange={this.toggle.bind(this, id, dispatch)}
                />
              ) : (
                <input
                  checked={false}
                  type="checkbox"
                  className="TodoItem"
                  onChange={this.toggle.bind(this, id, dispatch)}
                />
              )}

              {title}
              <details>
                {"Description:  "}
                {description}
                <br></br>
                {"Due Date:  "}
                {dueDate}
                <br></br>
                {"Time:   "}
                {time}
              </details>
            </h5>
          );
        }}
      </Consumer>
    );
  }
}

export default ToDoitem;
