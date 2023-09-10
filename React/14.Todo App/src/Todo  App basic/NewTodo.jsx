import React, { useState } from "react";
import TodoS from "./Todos";
export default function NewTodo(props) {
  const [data, setTodo] = useState("");
  const handelInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handelSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    props.onTodo(data);
    setTodo(""); //delete hoye jabe input data ,submit er por
  };
  return (
    <form action="" onSubmit={handelSubmit}>
      <label htmlFor="todo">New Todo:</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={data}
        onChange={handelInputChange}
      ></input>
      <button>Submit</button>
    </form>
  );
}
