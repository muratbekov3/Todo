import React, { useState } from "react";
import TodoList from "./ToDo/TodoList";
import Context from "./context";
import AddTodo from "./ToDo/AddTodo";

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

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed:false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>ToDo</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
