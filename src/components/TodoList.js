import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px"
            }}
          >
            {todo.task}
          </span>

          {/* The Cypress test expects this button to disappear when clicked */}
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              data-testid={`complete-button-${todo.id}`}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

