import React from "react";

export default function () {
  const handleParentFun = (e) => {
    console.log("Parent event: ", e);
  };
  const handleChildFun = (e) => {
    //sol: here,by using stopPropagation when we click child then only child will appear
    e.stopPropagation();
    console.log("Child event: ", e);
  };
  return (
    <div className="parent" onClick={handleParentFun}>
      <h1>Event 1</h1>
      <button className="child" onClick={handleChildFun}>
        Event Bubbling/StopPropagation
      </button>
    </div>
  );
}
