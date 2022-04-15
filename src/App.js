import React, { useState } from "react";
import "./App.css";
import TodoList from "./ToDo/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Buy milk" },
    { id: 2, completed: false, title: "Buy book" },
    { id: 3, completed: true, title: "Buy oil" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>ToDo</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
    </Context.Provider>
  );
}

export default App;
