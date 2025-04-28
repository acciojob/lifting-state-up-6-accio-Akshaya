import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          data-testid={`todo-${todo.id}`}
          className={`flex justify-between items-center p-3 border rounded ${
            todo.completed ? 'bg-green-100 line-through' : 'bg-white'
          }`}
          
        >
          <span>{todo.text}</span>

          {/* Only show button if not completed */}
          {!todo.completed ? (
            <button
              data-testid={`complete-button-${todo.id}`}
              onClick={() => handleComplete(todo.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Complete
            </button>
          ) : (
            <span className="text-green-600 font-semibold">Completed</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
