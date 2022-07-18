import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Provider } from "./context";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Header></Header>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </div>
      </Provider>
    );
  }
}
export default App;
