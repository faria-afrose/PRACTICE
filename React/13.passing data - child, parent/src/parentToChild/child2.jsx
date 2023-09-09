// child2.jsx
import React from "react";
import Card from "react-bootstrap/Card";

export default function Child2(props) {
  const { parentDataToChild } = props;
  return (
    <Card>
      <p>Parent to child:</p>

      <Card className="child">
        <h2> This is child Component</h2>
        <h2 className="parent">{parentDataToChild}</h2>
      </Card>
    </Card>
  );
}
