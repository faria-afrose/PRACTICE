import React, { useState } from "react";
import ChildAndParent from "./Child";
import Card from "react-bootstrap/Card";

export default function Parent() {
  const data = " Data from parent";
  const [dataChild, setDataChild] = useState("");
  const handelData = (dataChild) => {
    // console.log(dataChild);
    setDataChild(dataChild);
  };
  return (
    <Card className="container">
      <div className="div-left">
        <h2>parent</h2>
        <ChildAndParent data={data} onParentData={handelData} />
      </div>
    </Card>
  );
}
