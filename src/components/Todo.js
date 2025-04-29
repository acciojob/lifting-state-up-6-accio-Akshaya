import React from "react";
 
import List from "./List.js";
 
const Todo = () => {
 
  return (
 
    <div>
 
      <ul>
 
        <h1>Child Component</h1>
 
        {["Learn React", "Build a React app", "Deploy a React app"].map(
 
          (list, idx) => (
 
            <List key={idx} text={list} />
 
          )
 
        )}
 
      </ul>
 
    </div>
 
  );
 
};
 
export default Todo;

