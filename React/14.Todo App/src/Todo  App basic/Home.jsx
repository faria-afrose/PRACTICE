import React, { useState } from "react";
import NewTodo from "./NewTodo";
import TodoS from "./Todos";
const dummyTodo = ["Toto1", "Todo2"];
export default function Home() {
  const [todoS, setTodoS] = useState(dummyTodo);
  const handelNewTodo = (newTodo) => {
    // console.log(newTodo);
    setTodoS([...todoS, newTodo]);
  };

  return (
    <div>
      <NewTodo onTodo={handelNewTodo} />
      <TodoS todoS={todoS} />
    </div>
  );
}
