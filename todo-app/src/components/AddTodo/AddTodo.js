import "./AddTodo.scss";
import React, { Component } from "react";
import { Consumer } from "../../context";

import axios from "axios";
export default class AddTodo extends Component {
  state = {
    id: " ",
    title: " ",
    description: " ",
    status: false,
    style: { display: "none" },
  };

  updateTitle = (e) =>
    this.setState({
      title: e.target.value,
    });

  updateDesc = (e) =>
    this.setState({
      description: e.target.value,
    });

  updateDueDate = (e) =>
    this.setState({
      dueDate: e.target.value,
    });

  updateTime = (e) =>
    this.setState({
      time: e.target.value,
    });

  add = (dispatch, e) => {
    e.preventDefault();
    const newTodo = this.state;
    // axios
    //   .post("/items", newTodo)
    //   .then((res) => dispatch({ type: "ADD", payload: res.data }));
    // this.setState({
    //   title: "",
    //   description: "",
    //   dueDate: "",
    //   time: "",
    //   style: { display: "none" },
    // });
    fetch(`http://localhost:9000/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        dueDate: this.state.dueDate,
        time: this.state.time,
      }),
    })
      .then((response) => response.json())
      .then((response) => dispatch({ type: "ADD", payload: response.JSON() }));
    this.setState({
      title: "",
      description: "",
      dueDate: "",
      time: "",
      style: { display: "none" },
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <button
                id="addNewTaskBtn"
                type="button"
                aria-label="Add New Tasks"
                onClick={() => {
                  // if (this.state.style === { display: "block" }) {
                  //   this.setState({
                  //     style: { display: "none" },
                  //   });
                  // } else {
                  this.setState({
                    style: { display: "block" },
                  });
                  // }
                }}
              >
                Add New Tasks{" "}
              </button>
              <br></br>
              <form
                id="addTaskForm"
                style={this.state.style}
                onSubmit={this.add.bind(this, dispatch)}
              >
                <label>Title:</label>
                <input
                  type="text"
                  id="taskTitle"
                  placeholder="Title..."
                  required="required"
                  onChange={this.updateTitle}
                  value={this.state.title}
                />
                &nbsp; &nbsp;
                <label>Description:</label>
                <input
                  type="text"
                  id="taskDesc"
                  placeholder="Description..."
                  required="required"
                  onChange={this.updateDesc}
                  value={this.state.description}
                />
                &nbsp; &nbsp;
                <label>Due Date:</label>
                <input
                  type="date"
                  id="taskDate"
                  placeholder="Due Date..."
                  required="required"
                  //min="2022-03-02"
                  //max="2023-03-02"
                  onChange={this.updateDueDate}
                  value={this.state.dueDate}
                />
                &nbsp; &nbsp;
                <label>Due Time:</label>
                <input
                  type="time"
                  id="taskTime"
                  placeholder="Due Time..."
                  required="required"
                  onChange={this.updateTime}
                  value={this.state.time}
                />{" "}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="submit" id="addBtn" value="Add" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
