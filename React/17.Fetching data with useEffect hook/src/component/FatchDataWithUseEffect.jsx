import React, { useState, useEffect } from "react";

//use null if  need to handle loading or error states or for just diplay don't need handling for loading or errors then use empty array []
//   const [todoS, setTodoS] = useState([]);
// const variable =
//    todoS &&       this line mean todo is null or not checking is not need for empty array
//     todoS.map((todo) => {
//       return <p key={todo.id}>{todo.title}</p>;
//     });

const messageIs = "This is message before data fetch";

const FatchDataWithUseEffect = () => {
  const [todoS, setTodoS] = useState(null);
  const [MessageSend, setMessageSend] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodoS(data);
        setMessageSend(false);
        console.log(data);
      });
  }, []);
  const variable =
    todoS &&
    todoS.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div className="right-div">
      <h2>Fatch data with useEffect</h2>
      <hr></hr>

      {variable}
      {MessageSend && messageIs}
    </div>
  );
};
export default FatchDataWithUseEffect;
