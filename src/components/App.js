
import React, { useState } from "react";
import TodoList from './TodoList';
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {id:1,text:"Learn React", completed:false},
    {id:2,text:"Build a React app", completed:false},
    {id:3,text:"Deploy the React app", completed:false},
  ]);

  const handleComplete = (id) =>{
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed:true}: todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
      <h1>child Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete}/>
        {/* Do not remove the main div */}
    </div>
  );
};

export default App;
