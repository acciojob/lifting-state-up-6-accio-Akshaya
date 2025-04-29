import React, { useState } from "react";
 
const List = ({ text }) => {
 
  const [mark, setMark] = useState(false);
 
  return (
 
    <li>
 
      {text}
 
      {!mark ? <button onClick={() => setMark(true)}>Complete</button> : ""}
 
    </li>
 
  );
 
};
 
export default List;