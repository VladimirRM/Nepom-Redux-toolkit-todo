import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodoComplete(id)}
        />
        <span>{text}</span>
        <span className="delete" onClick={() => removeTodo(id)}>
          &times;
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
