import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
const FatchWithUseEffectAndErrorFinding = () => {
  const { todoS, MessageSend, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const messageIs = <p>"This is message before data fetch"</p>;
  const variable =
    todoS &&
    todoS.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div className="left-div">
      <h2>Find error</h2>
      <h4>Fatch data with useEffect</h4>
      <hr></hr>
      {error && <p>{error.message}</p>}
      {!error && <h3 className="highlightHeader">No error found!!</h3>}
      {variable}
      {MessageSend && messageIs}
    </div>
  );
};
export default FatchWithUseEffectAndErrorFinding;
