import React, { useState } from 'react';
import TodoList from './TodoList'; 

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false},
  ]);

  const handleComplete = (id) =>{
    const updatedTodos = todos.map((todo) =>
       todo.id === id ? {...todo, completed: true} : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
