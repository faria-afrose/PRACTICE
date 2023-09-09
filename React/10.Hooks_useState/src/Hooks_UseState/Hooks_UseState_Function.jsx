// importing  useState function from the react
import React, { useState } from "react";

export default function Hooks_UseState2() {
  //useState(0)  initial value of 0 ,
  //count ->state variable, holds -> current value.
  //setCount->function  allows/control   (update the count value)
  const [count, setCount] = useState(0);
  const HandelClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <br></br>
      <h1>Count:{count}</h1>
      <h6>Hooks UseState -Functional </h6>
      <button onClick={HandelClick}>Increment</button>
    </div>
  );
}
