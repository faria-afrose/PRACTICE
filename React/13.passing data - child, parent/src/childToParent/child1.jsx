//state lifting
import React, { useState } from "react";

export default function Child1(props) {
  const childData = " I'm from child";
  const handleClick = () => {
    props.onChildData(childData);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Chick to send Data</button>
      </div>
    </div>
  );
}
