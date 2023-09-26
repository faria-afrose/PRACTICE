import React, { useState, useEffect } from "react";

//use null if  need to handle loading or error states or for just diplay don't need handling for loading or errors then use empty array []
//   const [todoS, setTodoS] = useState([]);
// const variable =
//    todoS &&       this line mean todo is null or not checking is not need for empty array
//     todoS.map((todo) => {
//       return <p key={todo.id}>{todo.title}</p>;
//     });

const FatchDataWithUseEffectAndError = () => {
  const [todoS, setTodoS] = useState(null);
  const [MessageSend, setMessageSend] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jonplaceholder.typiode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("This is error");
        }
        return res.json();
      })
      .then((data) => {
        setTodoS(data);
        setMessageSend(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setMessageSend(false);
        console.log(error);
      });
  }, []);
  const messageIs = <p>"This is message before data fetch"</p>;
  const errorMassage = <p>{error}</p>;
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
      {error && errorMassage}
      {!error && <h3 className="highlightHeader">No error found!!</h3>}
      {variable}
      {MessageSend && messageIs}
    </div>
  );
};
export default FatchDataWithUseEffectAndError;
