// child2.jsx
import React from "react";
import Card from "react-bootstrap/Card";

export default function Child(props) {
  const dataChild = "Data from child";
  props.onParentData(dataChild);
  return (
    <div>
      <Card className="div-right">
        <h2>Child </h2>
        <h2 className="parent">{props.data}</h2>
      </Card>

      <h3 className="child ">{dataChild}</h3>
    </div>
  );
}
