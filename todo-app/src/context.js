import React, { Component } from "react";
const Context = React.createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        TodoList: prevState.TodoList.map((t) => {
          console.log(t);
          if (t.id === action.payload) {
            t.status = !t.status;
            // axios.put(`/items/${t.id}`, { status: t.status });
            //.then((res) => this.setState({ TodoList: res.t.status }));
            //console.log(t.status);
            fetch(`http://localhost:9000/items/${t.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                status: t.status,
              }),
            }).then((response) => response.json());
          }

          return t;
        }),
      };

    case "ADD":
      return {
        TodoList: [...prevState.TodoList, action.payload],
      };

    default:
      return prevState;
  }
};
export class Provider extends Component {
  state = {
    TodoList: [],
    dispatch: (action) =>
      this.setState((prevState) => reducer(prevState, action)),
  };

  componentDidMount() {
    // axios.get("/items").then((res) => {
    //   this.setState({ TodoList: res.data });
    // for (todo in res.data) {
    //   if (todo.status === true) {
    //   }
    // }

    const url = "http://localhost:9000/items";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          TodoList: result,
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
