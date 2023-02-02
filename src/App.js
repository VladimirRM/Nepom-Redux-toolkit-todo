import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/inputField";

function App() {

  const [text, setText] = useState("");

  
    }
  
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div className="App">
      <InputField text={text} handleInput={setText}  handleSubmit={addTodo} />

      <TodoList

        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
