import React, { useState } from "react";

export default function index() {
  //useState(0)  initial value of 0 ,
  //count ->state variable, holds -> current value.
  //setCount->function  allows/control   (update the count value)
  const [count, setCount] = useState(0);
  //   const HandelClick = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   };
  //here we get 3 as a output.here previous value is adding to new value.
  //   const HandelClick = () => {
  //     setCount((count) => count + 1);
  //     setCount((count) => count + 1);
  //     setCount((count) => count + 1);
  //   };
  // another way
  const HandelClick = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <div>
      <br></br>
      <h1>Count:{count}</h1>
      <h6>Update state based on previous state </h6>
      <button onClick={HandelClick}>Update</button>
    </div>
  );
}
