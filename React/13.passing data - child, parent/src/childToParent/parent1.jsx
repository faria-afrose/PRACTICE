import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Child1 from "./child1";

export default function Parent1() {
  const [childData, setChildData] = useState(""); // State to store child data

  const handleChildData = (data) => {
    setChildData(data); // Update the state with child data
  };

  return (
    <Card>
      <p>Child to parent:</p>
      <Card className="parent">
        <h2>This is parent component</h2>
        <Child1 onChildData={handleChildData} />
        <h2 className="child">{childData}</h2>
      </Card>
    </Card>
  );
}
