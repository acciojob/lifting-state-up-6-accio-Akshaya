import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-3 border rounded ${
            todo.completed ? 'bg-green-100 line-through' : 'bg-white'
          }`}
        >
          <span>{todo.text}</span>
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
