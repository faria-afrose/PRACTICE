import React from "react";
import Child2 from "./child2";
export default function Parent2() {
  const parentDataToChild = "Parents Data (to Child data passing) ";
  return (
    <div>
      <Child2 parentDataToChild={parentDataToChild} />
    </div>
  );
}
