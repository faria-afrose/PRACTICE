import React from "react";
import Todo from "./Todo";
const TodoS = (props) => {
  return (
    <div>
      {props.todoS.map((todo, index) => (
        //best practice  to write it to diff file    <p key={index}>{todo}</p>
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoS;
